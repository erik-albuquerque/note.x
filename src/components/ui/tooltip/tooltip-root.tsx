import * as Tooltip from '@radix-ui/react-tooltip'
import type {
  TooltipProviderProps,
  TooltipProps
} from '@radix-ui/react-tooltip'
import { PropsWithChildren } from 'react'

export type TooltipRootProps = PropsWithChildren & {
  providerProps?: TooltipProviderProps
  rootProps?: TooltipProps
}

const TooltipRoot: React.FC<TooltipRootProps> = ({
  children,
  providerProps,
  rootProps
}: TooltipRootProps) => {
  return (
    <Tooltip.Provider {...providerProps}>
      <Tooltip.Root {...rootProps}>{children}</Tooltip.Root>
    </Tooltip.Provider>
  )
}

export { TooltipRoot }
