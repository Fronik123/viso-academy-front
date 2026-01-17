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

export interface GroupedTimeEntry {
  date: string;
  entries: TimeEntry[];
  totalHours: number;
}

export interface GroupedTimeEntriesResponse {
  grandTotal: number;
  grouped: GroupedTimeEntry[];
}