import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { useTheme } from '../../hooks/use-theme'
import { cn } from '../../utils/cn'
import { ToggleThemeOption } from './toggle-theme-option'
import { ToggleThemeTrigger } from './toggle-theme-trigger'

const ToggleTheme = () => {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <ToggleThemeTrigger />
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
          <DropdownMenu.Item asChild>
            <ToggleThemeOption onClick={() => setTheme('light')}>
              Light
            </ToggleThemeOption>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <ToggleThemeOption onClick={() => setTheme('dark')}>
              Dark
            </ToggleThemeOption>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <ToggleThemeOption onClick={() => setTheme('system')}>
              System
            </ToggleThemeOption>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export { ToggleTheme }
