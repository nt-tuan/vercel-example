export interface SessionHistory {
  id: string;
  type: string;
  provider: string;
  createdDate: string;
  status: string;
  request: string;
  result: string;
}

export interface Session {
  id: string;
  sessionNumber: string;
  type: string;
  requestedDate: string;
  status: string;
  historyList?: SessionHistory[];
}
