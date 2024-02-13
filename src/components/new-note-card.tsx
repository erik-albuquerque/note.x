import { ArrowUpRight } from 'lucide-react'
import React from 'react'

import { cn } from '../utils/cn'
import { Button, type ButtonProps } from './button'

const NewNoteCard: React.FC<ButtonProps> = ({
  className = undefined,
  ...props
}: ButtonProps) => {
  return (
    <Button
      className={cn(
        'flex h-full max-w-60 flex-col gap-3',
        'text-left',
        'bg-muted p-4 outline-none',
        'group relative overflow-hidden rounded-lg border-2 border-border',
        'transition-colors hover:border-primary focus-visible:border-primary',
        className
      )}
      {...props}
    >
      <span className="text-base font-medium text-foreground  md:text-sm">
        Adicionar nota
      </span>
      <p className="text-base leading-6 text-muted-foreground md:text-sm">
        Grave uma nota em áudio que será convertida para texto automaticamente.
      </p>

      <div
        className={cn(
          'p-1.5',
          'absolute right-0 top-0',
          'dark:bg-zinc-900',
          'bg-border',
          'text-muted-foreground',
          'transition-colors',
          'group-hover:bg-primary',
          'group-focus-visible:bg-primary'
        )}
      >
        <ArrowUpRight
          className={cn(
            'size-5 transition-colors',
            'group-hover:text-zinc-900 group-focus-visible:text-zinc-900'
          )}
        />
      </div>
    </Button>
  )
}

export { NewNoteCard }
