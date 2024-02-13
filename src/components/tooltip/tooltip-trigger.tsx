import * as Tooltip from '@radix-ui/react-tooltip'
import { type TooltipTriggerProps } from '@radix-ui/react-tooltip'

const TooltipTrigger: React.FC<TooltipTriggerProps> = ({
  children,
  ...props
}: TooltipTriggerProps) => {
  return <Tooltip.Trigger {...props}>{children}</Tooltip.Trigger>
}

export { TooltipTrigger }
