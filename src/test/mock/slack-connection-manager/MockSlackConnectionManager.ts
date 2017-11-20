import * as sinon from "sinon";
import { ISlackConnectionManager, ISlackDataManager } from "../../../interfaces/";
import { MockSlackDataManager } from "./MockSlackDataManager";

export class MockSlackConnectionManager implements ISlackConnectionManager {
    private mockSlackDataManager;

    constructor(mockSlackDataManager: MockSlackDataManager) {
        this.mockSlackDataManager = mockSlackDataManager;
    }

    public start(): void {
        return;
    }

    public subscribeToRtm(eventName: string, callback: (error: Error, data: {}) => void): void {
        return;
    }

    public sendMessage(message: any, callback?: any) {
        return;
    }

    public getSlackDataManager(): ISlackDataManager {
        return this.mockSlackDataManager;
    }
}
