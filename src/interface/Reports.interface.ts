export interface IReport {
  id: string;
  state: string;
  type: string;
  message: string;
  isBlocked: boolean;
}
export type IReports = [IReport];
