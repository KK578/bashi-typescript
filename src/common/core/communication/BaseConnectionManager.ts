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
        const receiverPromises = this.receivers.map(this.handleConnect.bind(this));
        const senderPromises = this.senders.map(this.handleConnect.bind(this));

        return Promise.all(receiverPromises.concat(senderPromises))
                      .then((s) => s.reduce((a, b) => a && b));
    }

    public disconnect() {
        const receiverPromises = this.receivers.map(this.handleDisconnect.bind(this));
        const senderPromises = this.senders.map(this.handleDisconnect.bind(this));

        return Promise.all(receiverPromises.concat(senderPromises))
                      .then((s) => s.reduce((a, b) => a && b));
    }

    // Private
    private handleConnect(connection: IConnection) {
        return this.handlePromise(connection, ConnectionMethod.Connect);
    }

    private handleDisconnect(connection: IConnection) {
        return this.handlePromise(connection, ConnectionMethod.Disconnect);
    }

    private handlePromise(connection: IConnection, method: ConnectionMethod) {
        let promise;

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

        return promise.call(connection)
                      .then((a) => a)
                      .catch((_) => {
                          // TODO: Log error
                          const result = false;

                          return result;
                      });
    }
}
