'use client';

import TimeEntryForm from "./TimeEntryForm";
import { useCreateTimeEntry } from "@/hooks/useCreateTimeEntry";
import { CreateTimeEntry } from "@/types/timeEntry";

export default function CreateTimeEntrySection() {
  const { submit, isSubmitting, error, success, clearError, clearSuccess } = useCreateTimeEntry();

  const handleSubmit = async (data: CreateTimeEntry): Promise<boolean> => {
    return await submit(data);
  };

  return (
    <div className="mb-12 flex justify-center" style={{ maxWidth: '700px', width: '100%' }}>
      <TimeEntryForm
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        error={error}
        success={success}
        onErrorClose={clearError}
        onSuccessClose={clearSuccess}
      />
    </div>
  );
}
