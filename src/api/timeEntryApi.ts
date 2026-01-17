
import { CreateTimeEntry, TimeEntriesResponse, TimeEntry } from '@/types/timeEntry';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ;

export async function createTimeEntry(data: CreateTimeEntry): Promise<TimeEntry> {
  const response = await fetch(`${API_BASE_URL}/time-entries`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to create time entry');
  }

  return response.json();
}

export async function getTimeEntries(): Promise<TimeEntriesResponse> {
  const response = await fetch(`${API_BASE_URL}/time-entries`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch time entries');
  }

  return response.json();
}
