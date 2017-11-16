export interface IRtmClient {
    on(event: string, handler?: (...args: any[]) => void): void;
    start(opts?: any): void;
}
