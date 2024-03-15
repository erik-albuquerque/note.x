import { ComponentProps } from 'react'

import { cn } from '../../../utils/cn'

export type ToolbarViewProps = ComponentProps<'div'> & {
  open?: boolean
}

const ToolbarView: React.FC<ToolbarViewProps> = ({
  children,
  open = false,
  className = undefined,
  ...props
}: ToolbarViewProps) => {
  if (open === false) {
    return
  }

  return (
    <div className={cn('', className)} {...props}>
      {children}
    </div>
  )
}

export { ToolbarView }
