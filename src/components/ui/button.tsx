import { Slot } from '@radix-ui/react-slot'
import React from 'react'

import { cn } from '../../utils/cn'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = undefined, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn('', className)} ref={ref} {...props} />
  }
)

Button.displayName = 'Button'

export { Button }
