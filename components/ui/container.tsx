import type { FunctionComponent, HTMLAttributes, ReactNode } from "react"
import { clsx } from "clsx"

interface Props {
  className?: string
  children?: ReactNode
  el?: string
  clean?: boolean
}

export const Container = ({
  children,
  className,
  el = "div",
  clean
}: Props) => {
  const Component: FunctionComponent<HTMLAttributes<HTMLDivElement>> =
    el as never
  return (
    <Component
      className={clsx(
        className,
        !clean && "container px-44 mx-auto max-md:px-0"
      )}
    >
      {children}
    </Component>
  )
}
