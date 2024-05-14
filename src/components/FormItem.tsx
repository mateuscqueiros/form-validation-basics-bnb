import React from 'react';
import { FieldError } from 'react-hook-form';

interface FormItemProps extends React.PropsWithChildren {
  label: string;
  error?: FieldError;
}

export function FormItem({ label, error, children }: FormItemProps) {
  return (
    <label className="flex flex-col items-start">
      <span>{label}</span>
      <div className={'w-full'}>{children}</div>
      {error && <span>{error.message}</span>}
    </label>
  );
}
