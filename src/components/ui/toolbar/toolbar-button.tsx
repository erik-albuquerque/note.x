import React from 'react'

import { cn } from '../../../utils/cn'
import { Button, ButtonProps } from '../../ui/button'

const ToolbarButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = undefined, ...props }, ref) => {
    return (
      <Button
        className={cn(
          'cursor-pointer rounded-full p-1.5 transition-colors hover:bg-border',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    )
  }
)

ToolbarButton.displayName = 'ToolbarButton'

export { ToolbarButton }
