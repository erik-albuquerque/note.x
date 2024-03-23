import { ComponentProps } from 'react'

import { cn } from '../../utils/cn'

type SearchBarShortcutProps = ComponentProps<'div'> & {
  hotKey: string
}

const SearchBarShortcut: React.FC<SearchBarShortcutProps> = ({
  hotKey,
  className = undefined,
  ...props
}: SearchBarShortcutProps) => {
  return (
    <div className={cn('', className)} {...props}>
      <span className="text-muted-foreground">{hotKey}</span>
    </div>
  )
}

export { SearchBarShortcut }
