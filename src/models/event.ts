export interface IEvent {
  author: string;
  status: "success" | "error" | "warning";
  guest: string;
  date: string;
  description: string;
}
