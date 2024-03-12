import React, { ComponentProps } from 'react'

import { cn } from '../../utils/cn'

export interface ToggleThemeOptionProps extends ComponentProps<'div'> {}

const ToggleThemeOption = React.forwardRef<
  HTMLDivElement,
  ToggleThemeOptionProps
>(({ children, className = undefined, ...props }, ref) => {
  return (
    <div
      className={cn(
        'text-sm',
        'rounded-sm px-2 py-1.5',
        'relative flex items-center',
        'focus:bg-accent focus:text-accent-foreground',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        'cursor-default select-none outline-none transition-colors',
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
})

ToggleThemeOption.displayName = 'ToggleThemeOption'

export { ToggleThemeOption }
