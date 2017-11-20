import { expect } from "chai";
import * as sinon from "sinon";

import { InstantMessageListener } from "../../../../bashi/";
import { MockSlackConnectionManager, MockSlackDataManager } from "../../../mock/";

let instantMessageListener: InstantMessageListener;
let mockSlackConnectionManager: MockSlackConnectionManager;
let mockSlackDataManager: MockSlackDataManager;

describe("InstantMessageListener", () => {
    beforeEach(() => {
        mockSlackDataManager = new MockSlackDataManager();
        mockSlackConnectionManager = new MockSlackConnectionManager(mockSlackDataManager);
        instantMessageListener = new InstantMessageListener(mockSlackConnectionManager);
    });

    describe("#onMessage", () => {
        it("should send a message if channel is private message", () => {
            const stub = sinon.stub(mockSlackConnectionManager, "sendMessage");

            instantMessageListener.onMessage({
                channel: "true",
                text: "Hello"
            });

            expect(mockSlackConnectionManager.sendMessage).to.have.been.called;
            stub.restore();
        });

        it("should not send a message if channel is private message", () => {
            const stub = sinon.stub(mockSlackConnectionManager, "sendMessage");

            instantMessageListener.onMessage({
                channel: "false",
                text: "Hello"
            });

            expect(mockSlackConnectionManager.sendMessage).to.not.have.been.called;
            stub.restore();
        });
    });
});
