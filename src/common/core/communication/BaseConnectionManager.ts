import { IConnection, IConnectionManager, IMessageReceiver, IMessageSender } from "../../interface/";

// TODO: Move this elsewhere.
enum ConnectionMethod {
    Connect,
    Disconnect
}

export abstract class BaseConnectionManager implements IConnectionManager {
    private receivers: IMessageReceiver[];
    private senders: IMessageSender[];

    protected constructor() {
        this.receivers = [];
        this.senders = [];
    }

    // IConnection
    public connect() {
        return this.chainPromises(ConnectionMethod.Connect, this.receivers, this.senders);
    }

    public disconnect() {
        return this.chainPromises(ConnectionMethod.Disconnect, this.receivers, this.senders);
    }

    // IConnectionManager
    public subscribeReceiver(receiver: IMessageReceiver) {
        this.receivers.push(receiver);
    }

    public unsubscribeReceiver(receiver: IMessageReceiver) {
        const index = this.receivers.indexOf(receiver);

        if (index < 0) {
            throw new Error("Cannot unsubscribe a MessageReceiver that is not subscribed.");
        }

        this.receivers.splice(index, 1);
    }

    public subscribeSender(sender: IMessageSender) {
        this.senders.push(sender);
    }

    public unsubscribeSender(sender: IMessageSender) {
        const index = this.senders.indexOf(sender);

        if (index < 0) {
            throw new Error("Cannot unsubscribe a MessageSender that is not subscribed.");
        }

        this.senders.splice(index, 1);
    }

    // Private
    private chainPromises(method: ConnectionMethod,
                          ...connections: IConnection[][]) : Promise<boolean> {
        const promises = connections.reduce((a, b) => a.concat(b))
                                    .map((connection) => {
                                        let promise: () => Promise<boolean>;

                                        switch (method) {
                                            case ConnectionMethod.Connect:
                                                promise = connection.connect;
                                                break;

                                            case ConnectionMethod.Disconnect:
                                                promise = connection.disconnect;
                                                break;

                                            default:
                                                throw new Error("Invalid Connection Method.");
                                        }

                                        return promise.call(connection);
                                    });

        return Promise.all(promises)
                      .then((results) => results.reduce((a, b) => a && b));
    }
}
