import { ComponentProps } from 'react'

import { cn } from '../../../../utils/cn'

type DetailsInfoItemTitleProps = ComponentProps<'div'>

const DetailsInfoItemTitle = ({
  children,
  className = undefined,
  ...props
}: DetailsInfoItemTitleProps) => {
  return (
    <span className={cn('text-sm', className)} {...props}>
      {children}
    </span>
  )
}

export { DetailsInfoItemTitle }
