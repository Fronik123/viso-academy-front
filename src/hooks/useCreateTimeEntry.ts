import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createTimeEntry } from '@/api/timeEntryApi';
import { CreateTimeEntry } from '@/types/timeEntry';

export function useCreateTimeEntry() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const submit = async (data: CreateTimeEntry) => {
    setError(null);
    setSuccess(null);
    setIsSubmitting(true);
    
    try {
      await createTimeEntry(data);
      setSuccess('Time entry saved successfully!');
      router.refresh();
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save time entry');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearError = () => setError(null);
  const clearSuccess = () => setSuccess(null);

  return {
    submit,
    isSubmitting,
    error,
    success,
    clearError,
    clearSuccess,
  };
}
