import { ComponentProps } from 'react'

import { cn } from '../../../../utils/cn'

type DetailsInfoItemDescriptionProps = ComponentProps<'div'>

const DetailsInfoItemDescription = ({
  children,
  className = undefined,
  ...props
}: DetailsInfoItemDescriptionProps) => {
  return (
    <span className={cn('font-medium', className)} {...props}>
      {children}
    </span>
  )
}

export { DetailsInfoItemDescription }
