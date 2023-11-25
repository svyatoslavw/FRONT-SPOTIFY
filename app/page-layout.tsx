import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="h-[100%] bg-gradient-custom overflow-y-auto rounded-xl">
      <div className="h-full">{children}</div>
    </div>
  )
}
