import { signin } from "./Auth";
import { User } from "../models/User";

describe("Api", () => {
  function mockFetch(data: User) {
    return jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => data,
      })
    );
  }

  describe("signin", () => {
    const payload = { email: "info", password: "pw" };

    it("calls signin endpoint and returns  user", async () => {
      global.fetch = mockFetch({ some: "response" });

      const response = await signin(payload);
      expect(response).toEqual({ some: "response" });

      const [firstArg, secondArg] = global.fetch.mock.calls[0];
      expect(firstArg).toEqual(
        "http://example.net/v1/auth/account_status?some=info"
      );
      expect(secondArg.method).toEqual("POST");
      expect(secondArg.headers).toEqual({
        "Content-Type": "application/json; charset=utf-8",
      });
    });
  });
});
