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
        let stubs: sinon.SinonStub[];

        afterEach(() => {
            stubs.forEach((stub) => stub.restore);
            stubs = [];
        });

        it("should send a message if channel is private message", () => {
            stubs = [
                sinon.stub(mockSlackDataManager, "isPrivateChannel").returns(true),
                sinon.stub(mockSlackConnectionManager, "sendMessage")
            ];

            instantMessageListener.onMessage({
                channel: "AnyChannelID",
                text: "AnyText"
            });

            expect(mockSlackConnectionManager.sendMessage)
                  .to.have.been.calledWithMatch(sinon.match.has("channel", "AnyChannelID"))
                  .and.calledWithMatch(sinon.match.has("text"));
        });

        it("should not send a message if channel is not private message", () => {
            stubs = [
                sinon.stub(mockSlackDataManager, "isPrivateChannel").returns(false),
                sinon.stub(mockSlackConnectionManager, "sendMessage")
            ];

            instantMessageListener.onMessage({
                channel: "AnyChannelID",
                text: "AnyText"
            });

            expect(mockSlackConnectionManager.sendMessage).to.not.have.been.called;
        });
    });
});
