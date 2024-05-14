import React from 'react';

interface FormItemProps extends React.PropsWithChildren {
  label: string;
}

export function FormItem({ label, children }: FormItemProps) {
  return (
    <label className="flex flex-col items-start">
      <span>{label}</span>
      <div className="w-full">{children}</div>
    </label>
  );
}
