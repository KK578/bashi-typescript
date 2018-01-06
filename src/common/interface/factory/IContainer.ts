import { BashiApp } from "../../../BashiApp";

export interface IContainer {
    resolve(): BashiApp;
}
