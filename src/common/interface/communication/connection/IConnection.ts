export interface IConnection {
    /**
     * Connect to the message provider.
     */
    connect(): Promise<boolean>;

    /**
     * Disconnect from the message provider.
     */
    disconnect(): Promise<boolean>;
}
