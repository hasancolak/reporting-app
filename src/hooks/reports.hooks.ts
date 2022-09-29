import { useEffect, useState } from "react";
import { blockReport, getReports, resolveReport } from "../api/Api";
import { IReport } from "../interface/Reports.interface";

/**
 * @description mapReports is function mapping response data consumed via api.
 * @param response
 * @returns [IReports]
 */
const mapReports = (response: any) =>
  response.data.elements.map((item: any) => {
    return {
      id: item.id,
      state: item.state,
      type: item.payload.reportType,
      message: item.payload.message,
    };
  });

/**
 * @description useReport is a custom hook that manages list, resolve and block reports
 * @returns @reports as [IReport], @resolver as a functıon, @blocker as a function
 */
const useReports = () => {
  const [reports, setReports] = useState<[IReport]>();

  useEffect(() => {
    getReports()
      .then((response) => {
        setReports(mapReports(response));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const resolver = (id: string) => {
    resolveReport(id)
      .then((response) => {
        if (response.status === 200) {
          const newReports = reports?.filter((obj) => obj.id !== id) as [IReport];
          setReports(newReports);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const blocker = (id: string) => {
    blockReport(id)
      .then((response) => {
        if (response.status === 200) {
          const newReports = reports?.map((element) => {
            if (element.id === id) {
              element.isBlocked = true;
              element.state = "BLOCKED";
            }
            return element;
          }) as [IReport];

          setReports(newReports);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { reports, resolver, blocker };
};

export { useReports };
