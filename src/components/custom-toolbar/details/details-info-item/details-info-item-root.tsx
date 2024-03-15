import { ComponentProps } from 'react'

import { cn } from '../../../../utils/cn'

type DetailsInfoItemRootProps = ComponentProps<'div'>

const DetailsInfoItemRoot = ({
  children,
  className = undefined,
  ...props
}: DetailsInfoItemRootProps) => {
  return (
    <div
      className={cn('flex items-center justify-between', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export { DetailsInfoItemRoot }
