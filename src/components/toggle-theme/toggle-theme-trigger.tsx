import { Sun, MoonStar } from 'lucide-react'
import React from 'react'

import { useTheme } from '../../hooks/use-theme'
import { cn } from '../../utils/cn'
import { Button, type ButtonProps } from '../button'

const ToggleThemeTrigger = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref) => {
    const { theme, systemTheme } = useTheme()
    const isDarkTheme = theme === 'dark' || systemTheme === 'dark'

    return (
      <Button
        className={cn(
          'rounded-md',
          'h-9 w-9 px-0 py-2',
          'whitespace-nowrap text-sm font-medium',
          'inline-flex items-center justify-center',
          'disabled:pointer-events-none disabled:opacity-50',
          'transition-colors',
          'hover:bg-muted/50 hover:text-accent-foreground',
          'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
        )}
        ref={ref}
        {...props}
      >
        {isDarkTheme ? (
          <MoonStar className="size-5" />
        ) : (
          <Sun className="size-5 text-foreground" />
        )}
      </Button>
    )
  }
)

ToggleThemeTrigger.displayName = 'ToggleThemeTrigger'

export { ToggleThemeTrigger }
