export interface JobItem {
  id: number;
  userId: number;
  companyName: string;
  position: string;
  startedAt: Date | null;
  createdAt: Date;
}

export interface JobsList {
  user: {
    id: number;
    name: string;
    avatar: string;
  };
  jobs: JobItem[];
}
