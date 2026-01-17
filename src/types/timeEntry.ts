export interface TimeEntry {
  id: number;
  date: string;
  project: string;
  hours: number;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTimeEntry {
  date: string;
  project: string;
  hours: number;
  description: string;
}

export interface TimeEntriesResponse {
  data: TimeEntry[];
  total: number;
}