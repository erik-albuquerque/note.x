import { ComponentProps } from 'react'

import { Color } from '../../../../types/color'
import { cn } from '../../../../utils/cn'
import { themeBackgroundColorVariants } from '../../../../utils/variants/theme-background-color-variants'

type DetailsInfoItemDotColorProps = ComponentProps<'div'> & {
  color: Color
}

const DetailsInfoItemDotColor = ({
  className = undefined,
  color,
  ...props
}: DetailsInfoItemDotColorProps) => {
  const themeBackgroundClassName = themeBackgroundColorVariants({
    theme: color
  })

  return (
    <div
      data-color={color}
      className={cn(
        'size-3.5 rounded-full',
        themeBackgroundClassName,
        className
      )}
      {...props}
    />
  )
}

export { DetailsInfoItemDotColor }
