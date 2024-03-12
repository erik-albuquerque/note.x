import { ComponentProps } from 'react'

import { cn } from '../../../utils/cn'

export type ToolbarRootProps = ComponentProps<'div'> & {
  open?: boolean
}

const ToolbarRoot: React.FC<ToolbarRootProps> = ({
  children,
  open = false,
  className = undefined,
  ...props
}: ToolbarRootProps) => {
  return (
    <div className={cn('relative mb-2 h-7 w-full', className)} {...props}>
      {open && children}
    </div>
  )
}

export { ToolbarRoot }
