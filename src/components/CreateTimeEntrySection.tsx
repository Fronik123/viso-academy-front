'use client';

import TimeEntryForm from "./TimeEntryForm";
import { useCreateTimeEntry } from "@/hooks/useCreateTimeEntry";

export default function CreateTimeEntrySection() {
  const { submit, isSubmitting, error, success, clearError, clearSuccess } = useCreateTimeEntry();

  return (
    <div className="mb-12 flex justify-center">
      <TimeEntryForm
        onSubmit={submit}
        isSubmitting={isSubmitting}
        error={error}
        success={success}
        onErrorClose={clearError}
        onSuccessClose={clearSuccess}
      />
    </div>
  );
}
