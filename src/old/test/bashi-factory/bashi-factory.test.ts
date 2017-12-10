import { expect } from "chai";

import { App } from "../../bashi/app";
import { BashiFactory } from "../../factory/bashi-factory";

const mockBotToken = "";
const mockTrainUrl = "";

describe("Bashi Factory", () => {
    describe("#createApp", () => {
        it("Should create an App", () => {
            const factory = new BashiFactory(mockBotToken, mockTrainUrl);
            const app = factory.createApp();

            expect(app).to.be.an.instanceOf(App);
        });
    });
});
