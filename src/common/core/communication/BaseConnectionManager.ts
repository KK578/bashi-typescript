import { IConnection, IConnectionManager, IMessageReceiver, IMessageSender } from "../../interface/";

// TODO: Move this elsewhere.
enum ConnectionMethod {
    Connect,
    Disconnect
}

export abstract class BaseConnectionManager implements IConnectionManager {
    protected receivers: IMessageReceiver[];
    protected senders: IMessageSender[];

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
