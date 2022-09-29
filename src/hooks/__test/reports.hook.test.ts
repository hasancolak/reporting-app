import { renderHook, act } from "@testing-library/react";
import { useReports } from "../reports.hooks";
import axios from "axios";

jest.mock("axios");

describe("hook", () => {
  const mockData = {
    data: {
      elements: [
        {
          id: "0103e005-b762-485f-8f7e-722019d4f302",
          source: "REPORT",
          state: "OPEN",
          payload: {
            source: "REPORT",
            reportType: "SPAM",
            message: null,
            reportId: "6706b3ba-bf36-4ad4-9b9d-4ebf4f4e2429",
          },
        },
      ],
    },
  };

  const response = [
    {
      id: "0103e005-b762-485f-8f7e-722019d4f302",
      state: "OPEN",
      type: "SPAM",
      message: null,
    },
  ];

  it("should return reports hooks", async () => {
    axios.get = jest.fn().mockResolvedValue(mockData);
    const { result } = renderHook(() => useReports());

    await act(() => {
      result.current.reports;
    });

    expect(result.current.reports).toEqual(response);
  });
});
