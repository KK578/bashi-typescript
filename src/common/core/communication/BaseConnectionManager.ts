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
        const receiverPromises = this.chainPromises(this.receivers, ConnectionMethod.Connect);
        const senderPromises = this.chainPromises(this.senders, ConnectionMethod.Connect);

        return Promise.all(receiverPromises.concat(senderPromises))
                      .then((s) => s.reduce((a, b) => a && b));
    }

    public disconnect() {
        const receiverPromises = this.chainPromises(this.receivers, ConnectionMethod.Disconnect);
        const senderPromises = this.chainPromises(this.senders, ConnectionMethod.Disconnect);

        return Promise.all(receiverPromises.concat(senderPromises))
                      .then((s) => s.reduce((a, b) => a && b));
    }

    // Private
    private chainPromises(connections: IConnection[],
                          method: ConnectionMethod) : Array<Promise<boolean>> {
        return connections.map((connection) => {
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
    }
}
