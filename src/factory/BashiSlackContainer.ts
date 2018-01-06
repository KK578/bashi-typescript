import { RtmClient, WebClient } from "@slack/client";

import { BashiApp } from "../BashiApp";
import { TaskFactory } from "./TaskFactory";

import { IConfigSettings, IConnection, IConnectionManager,
    IContainer, IEventManager, IMessageEventHandler, IMessageReceiver,
    IMessageSender, ITaskFactory } from "../common/interface/";
import { SlackConnectionManager, SlackMessageEventManager, SlackMessageReceiver,
    SlackMessageSender, TrainMessageEventHandler } from "../slack/index";

export class BashiSlackContainer implements IContainer {
    private settings: IConfigSettings;
    private slackMessageSender: IMessageSender;

    constructor(settings: IConfigSettings) {
        this.settings = settings;
    }

    public resolve(): BashiApp {
        const slackConnectionManager : IConnectionManager = this.createSlackConnectionManager();

        return new BashiApp(slackConnectionManager);
    }

    private createSlackConnectionManager(): IConnectionManager {
        const messageReceiver : IMessageReceiver = this.createSlackMessageReceiver();
        const messageSender : IMessageSender = this.createSlackMessageSender();

        return new SlackConnectionManager(messageReceiver, messageSender);
    }

    private createSlackMessageReceiver(): IMessageReceiver {
        const rtmClient : RtmClient = new RtmClient(this.settings.SlackBotToken);
        const eventManager : IEventManager = this.createSlackMessageEventManager();

        return new SlackMessageReceiver(rtmClient, eventManager);
    }

    private createSlackMessageEventManager(): IEventManager {
        const eventHandlers : IMessageEventHandler[] = this.createSlackMessageEventHandlers();

        return new SlackMessageEventManager(eventHandlers);
    }

    private createSlackMessageEventHandlers(): IMessageEventHandler[] {
        return [
            this.createTrainMessageEventHandler()
        ];
    }

    private createTrainMessageEventHandler(): IMessageEventHandler {
        const taskFactory = this.createTaskFactory();

        return new TrainMessageEventHandler(this.settings.TrainUrl, taskFactory);
    }

    private createTaskFactory(): ITaskFactory {
        const messageSender = this.createSlackMessageSender();

        return new TaskFactory(messageSender);
    }

    private createSlackMessageSender(): IMessageSender {
        if (!this.slackMessageSender) {
            const webClient : WebClient = new WebClient(this.settings.SlackBotToken);
            this.slackMessageSender = new SlackMessageSender(webClient);
        }

        return this.slackMessageSender;
    }
}
