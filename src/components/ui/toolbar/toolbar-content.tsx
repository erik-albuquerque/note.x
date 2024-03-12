import { ComponentProps } from 'react'

import { cn } from '../../../utils/cn'

export type ToolbarContentProps = ComponentProps<'div'> & {
  children: React.ReactNode
}

const ToolbarContent: React.FC<ToolbarContentProps> = ({
  children,
  className = undefined,
  ...props
}: ToolbarContentProps) => {
  return (
    <div className={cn('flex items-center gap-0.5', className)} {...props}>
      {children}
    </div>
  )
}

export { ToolbarContent }
