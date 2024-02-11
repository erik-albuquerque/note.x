import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Sun, MoonStar } from 'lucide-react'

import { useTheme } from '../hooks/use-theme'
import { cn } from '../utils/cn'

const ToggleTheme = () => {
  const { setTheme, theme, systemTheme } = useTheme()
  const isDarkTheme = theme === 'dark' || systemTheme === 'dark'

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
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
        >
          {isDarkTheme ? (
            <MoonStar className="size-5" />
          ) : (
            <Sun className="size-5 text-foreground" />
          )}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={cn(
            'min-w-32 overflow-hidden rounded-md border p-1 dark:border-border',
            'will-change-[opacity,transform]',
            'data-[side=top]:animate-slideDownAndFade',
            'data-[side=bottom]:animate-slideUpAndFade',
            'data-[side=right]:animate-slideLeftAndFade',
            'data-[side=left]:animate-slideRightAndFade',
            'bg-popover text-popover-foreground shadow-md'
          )}
          sideOffset={5}
          align="end"
        >
          <DropdownMenu.Item
            onClick={() => setTheme('light')}
            className={cn(
              'text-sm',
              'rounded-sm px-2 py-1.5',
              'relative flex items-center',
              'focus:bg-accent focus:text-accent-foreground',
              'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
              'cursor-default select-none outline-none transition-colors'
            )}
          >
            Light
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onClick={() => setTheme('dark')}
            className={cn(
              'text-sm',
              'rounded-sm px-2 py-1.5',
              'relative flex items-center',
              'focus:bg-accent focus:text-accent-foreground',
              'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
              'cursor-default select-none outline-none transition-colors'
            )}
          >
            Dark
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onClick={() => setTheme('system')}
            className={cn(
              'text-sm',
              'rounded-sm px-2 py-1.5',
              'relative flex items-center',
              'focus:bg-accent focus:text-accent-foreground',
              'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
              'cursor-default select-none outline-none transition-colors'
            )}
          >
            System
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export { ToggleTheme }
