import { ComponentProps } from 'react'

import { cn } from '../../utils/cn'

type SearchBarRootProps = ComponentProps<'div'>

const SearchBarRoot: React.FC<SearchBarRootProps> = ({
  children,
  className = undefined,
  ...props
}: SearchBarRootProps) => {
  return (
    <div
      className={cn(
        'group',
        'flex flex-row items-center justify-around gap-2',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { SearchBarRoot }
