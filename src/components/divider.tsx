import { ComponentProps } from 'react'

import { cn } from '../utils/cn'

type DividerProps = ComponentProps<'div'>

const Divider: React.FC<DividerProps> = ({
  className = undefined,
  ...props
}: DividerProps) => {
  return <div className={cn('h-px bg-border', className)} {...props} />
}

export { Divider }
