import axios from "axios";

/**
 * @description getReports retuns report data
 * @returns json
 */
const getReports = async () => await axios.get("/reports");

/**
 * @description resolveReport puts the resolved report
 * @param id
 * @returns json
 */
const resolveReport = (id: string) => axios.put("/reports/:" + id, { ticketState: "CLOSED" });

/**
 * @description blockReport post the blocked report
 * @param id
 * @returns json
 */
const blockReport = (id: string) => axios.post("/reports/block/:" + id, { ticketState: "BLOCKED" });

export { getReports, resolveReport, blockReport };
