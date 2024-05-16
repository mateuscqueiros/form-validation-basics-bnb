import { IconX } from '@tabler/icons-react';

export type ModalProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  title: string;
} & React.PropsWithChildren;

export function Modal({ open, setOpen, title, children }: ModalProps) {
  return (
    <div
      id="modal"
      className={
        'absolute top-0 left-0 w-screen h-screen z-10 ' + (open ? '' : 'hidden')
      }
    >
      <div className="relative flex justify-center items-center h-full w-full">
        <div
          id="backdrop"
          className="absolute top-0 left-0 w-full h-full bg-slate-500 opacity-20 z-0"
        ></div>
        <div className="p-8 bg-teal-900 rounded-lg z-20">
          <div className="relative">
            <IconX
              onClick={() => setOpen(false)}
              className="absolute top-0 right-0 cursor-pointer"
            />
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
