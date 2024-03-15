import * as Lucide from 'lucide-react'
import React from 'react'

import { Color as ColorType } from '../../../types/color'
import { cn } from '../../../utils/cn'
import { capitalizeFirstLetter } from '../../../utils/string/capitalize-first-letter'
import {
  themeBackgroundColorVariants,
  type ThemeBackgroundColorVariantsProps
} from '../../../utils/variants/theme-background-color-variants'
import { Button, ButtonProps } from '../../ui/button'
import { Tooltip } from '../../ui/tooltip'

/*
  I don't know why, but it only works if I leave this code commented out, 
  if I remove it, the styles don't work
*/

// const colorVariants = cva(
//   [
//     'relative',
//     'size-6',
//     'cursor-pointer',
//     'rounded-full',
//     'ring-2 ring-transparent hover:ring-foreground',
//     'data-[active=true]:ring-[3px] data-[active=true]:ring-violet-400'
//   ],
//   {
//     variants: {
//       color: {
//         coral:
//           'data-[color=coral]:bg-coral dark:data-[color=coral]:bg-coral-dark',
//         peach:
//           'data-[color=peach]:bg-peach dark:data-[color=peach]:bg-peach-dark',
//         sand: 'data-[color=sand]:bg-sand dark:data-[color=sand]:bg-sand-dark',
//         mint: 'data-[color=mint]:bg-mint dark:data-[color=mint]:bg-mint-dark',
//         sage: 'data-[color=sage]:bg-sage dark:data-[color=sage]:bg-sage-dark',
//         fog: 'data-[color=fog]:bg-fog dark:data-[color=fog]:bg-fog-dark',
//         storm:
//           'data-[color=storm]:bg-storm dark:data-[color=storm]:bg-storm-dark',
//         dusk: 'data-[color=dusk]:bg-dusk dark:data-[color=dusk]:bg-dusk-dark',
//         blossom:
//           'data-[color=blossom]:bg-blossom dark:data-[color=blossom]:bg-blossom-dark',
//         clay: 'data-[color=clay]:bg-clay dark:data-[color=clay]:bg-clay-dark',
//         chalk:
//           'data-[color=chalk]:bg-chalk dark:data-[color=chalk]:bg-chalk-dark',
//         default: 'bg-background'
//       }
//     },
//     defaultVariants: {
//       color: 'default'
//     }
//   }
// )

export type ColorProps = ButtonProps &
  ThemeBackgroundColorVariantsProps & {
    colorName: ColorType
    isActive?: boolean
    isDefault?: boolean
  }

const Color: React.FC<ColorProps> = ({
  colorName,
  isActive = false,
  isDefault = false,
  className = undefined,
  ...props
}: ColorProps) => {
  const capitalizedColorName = capitalizeFirstLetter(colorName)
  const themeBackgroundClassName = themeBackgroundColorVariants({
    theme: colorName
  })

  return (
    <Tooltip.Root>
      <Tooltip.Trigger>
        <Button
          data-color={colorName}
          data-active={isActive}
          disabled={isActive}
          className={cn(
            'relative',
            'rounded-full',
            {
              'p-1': isDefault === true
            },
            {
              'size-6': isDefault === false
            },
            'ring-2 ring-transparent',
            'transition-colors hover:ring-foreground',
            'data-[active=true]:ring-[3px] data-[active=true]:ring-violet-400',
            themeBackgroundClassName,
            className
          )}
          {...props}
        >
          {isActive === true && (
            <Lucide.Check
              className={cn(
                'absolute -right-1.5 -top-1.5',
                'flex size-4 items-center justify-center rounded-full',
                'size-[14px] bg-violet-400 text-white'
              )}
            />
          )}

          {isDefault === true && (
            <Lucide.CircleOffIcon className="size-5 text-foreground" />
          )}
        </Button>
      </Tooltip.Trigger>

      <Tooltip.Content side="bottom" className="z-20">
        {capitalizedColorName}
      </Tooltip.Content>
    </Tooltip.Root>
  )
}

export { Color }
