import { ComponentProps } from 'react'

import { cn } from '../../utils/cn'

type SearchBarIconProps = ComponentProps<'div'>

const SearchBarIcon: React.FC<SearchBarIconProps> = ({
  children,
  className = undefined,
  ...props
}: SearchBarIconProps) => {
  return (
    <div className={cn('', className)} {...props}>
      {children}
    </div>
  )
}

export { SearchBarIcon }
