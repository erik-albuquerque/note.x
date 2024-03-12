import * as Tooltip from '@radix-ui/react-tooltip'
import type { TooltipContentProps } from '@radix-ui/react-tooltip'

import { cn } from '../../../utils/cn'

const TooltipContent: React.FC<TooltipContentProps> = ({
  children,
  className = undefined,
  ...props
}: TooltipContentProps) => {
  return (
    <Tooltip.Portal>
      <Tooltip.Content
        className={cn(
          'px-3 py-2',
          'bg-foreground text-background',
          'select-none rounded will-change-[transform,opacity]',
          'text-xs font-medium leading-none',
          'shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]',
          'data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade',
          'data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade',
          'data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade',
          'data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade',
          className
        )}
        sideOffset={5}
        {...props}
      >
        {children}
        <Tooltip.Arrow className="fill-foreground" />
      </Tooltip.Content>
    </Tooltip.Portal>
  )
}

export { TooltipContent }
