import { IConnection, IConnectionManager, IMessageReceiver, IMessageSender } from "../../interface/";

// TODO: Move this elsewhere.
enum ConnectionMethod {
    Connect,
    Disconnect
}

export class BaseConnectionManager implements IConnectionManager {
    protected receivers: [IMessageReceiver];
    protected senders: [IMessageSender];

    private handlePromise(promise: () => Promise<boolean>) {
        return promise().then((a) => a)
                        .catch((_) => {
                            // TODO: Log error
                            const result = false;

                            return result;
                        });
    }

    private handleConnect(connection: IConnection) {
        return this.handlePromise(connection.connect);
    }

    private handleDisconnect(connection: IConnection) {
        return this.handlePromise(connection.disconnect);
    }

    public connect() {
        const receiverPromises = this.receivers.map(this.handleConnect);
        const senderPromises = this.senders.map(this.handleConnect);

        return Promise.all(receiverPromises.concat(senderPromises))
                      .then((s) => s.reduce((a, b) => a && b));
    }

    public disconnect() {
        const receiverPromises = this.receivers.map(this.handleDisconnect);
        const senderPromises = this.senders.map(this.handleDisconnect);

        return Promise.all(receiverPromises.concat(senderPromises))
                      .then((s) => s.reduce((a, b) => a && b));
    }
}
