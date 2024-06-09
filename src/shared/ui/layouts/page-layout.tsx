import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="h-[100%] bg-gradient-custom overflow-y-hidden rounded-xl">
      <div className="h-full overflow-y-auto">{children}</div>
    </div>
  );
}
