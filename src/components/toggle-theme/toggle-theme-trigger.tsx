import * as Lucide from 'lucide-react'
import React, { ComponentProps } from 'react'

import { useTheme } from '../../hooks/use-theme'
import { cn } from '../../utils/cn'

const ToggleThemeTrigger = React.forwardRef<
  HTMLDivElement,
  ComponentProps<'div'>
>(({ className = undefined, ...props }, ref) => {
  const { isDarkTheme } = useTheme()

  return (
    <div
      className={cn(
        'rounded-md',
        'h-9 w-9 px-0 py-2',
        'whitespace-nowrap text-sm font-medium',
        'inline-flex items-center justify-center',
        'disabled:pointer-events-none disabled:opacity-50',
        'transition-colors',
        'hover:bg-muted/50 hover:text-accent-foreground',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
        className
      )}
      ref={ref}
      {...props}
    >
      {isDarkTheme ? (
        <Lucide.MoonStar className="size-5" />
      ) : (
        <Lucide.Sun className="size-5 text-foreground" />
      )}
    </div>
  )
})

ToggleThemeTrigger.displayName = 'ToggleThemeTrigger'

export { ToggleThemeTrigger }
