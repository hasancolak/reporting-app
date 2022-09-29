import { getReports, resolveReport, blockReport } from "../Api";
import axios from "axios";

jest.mock("axios");

describe("Api test", () => {
  const data = {
    id: "0103e005-b762-485f-8f7e-722019d4f302",
    source: "REPORT",
    sourceIdentityId: "6750b4d5-4cb5-45f0-8b60-61be2072cce2",
    reference: {
      referenceId: "6706b3ba-bf36-4ad4-9b9d-4ebf4f4e2429",
      referenceType: "REPORT",
    },
    state: "OPEN",
    payload: {
      source: "REPORT",
      reportType: "SPAM",
      message: null,
      reportId: "6706b3ba-bf36-4ad4-9b9d-4ebf4f4e2429",
      referenceResourceId: "a03411ce-0197-49a2-86d4-55e06aa52e79",
      referenceResourceType: "REPLY",
    },
  };

  it("should make an axios call for getReports", async () => {
    axios.get = jest.fn().mockResolvedValue(data);
    const result = getReports();
    await expect(result).resolves.toEqual(data);
  });

  it("should make an axios call for resolveReport", async () => {
    axios.put = jest.fn().mockResolvedValue({ result: "SUCCESS", ticketState: "CLOSED" });
    const result = resolveReport("id");
    await expect(result).resolves.toEqual({ result: "SUCCESS", ticketState: "CLOSED" });
  });

  it("should make an axios call for blockReport", async () => {
    axios.post = jest.fn().mockResolvedValue({ result: "SUCCESS", ticketState: "BLOCKED" });
    const result = blockReport("id");
    await expect(result).resolves.toEqual({ result: "SUCCESS", ticketState: "BLOCKED" });
  });
});
