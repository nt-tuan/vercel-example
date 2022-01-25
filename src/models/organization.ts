import {Session} from "./session";

export interface Organization {
  id: string;
  marketplaceName: string;
  organizationName: string;
  organizationId: string;
  companyName: string;
  organizationJoinedDate: string;
  status: string;
  sessionList?: Session[];
}
