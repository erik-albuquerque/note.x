import { ComponentProps } from 'react'

import { cn } from '../../../utils/cn'

export type NoteCardToolbarRootProps = ComponentProps<'div'> & {
  isActive?: boolean
}

const NoteCardToolbarRoot: React.FC<NoteCardToolbarRootProps> = ({
  children,
  isActive = false,
  className = undefined,
  ...props
}: NoteCardToolbarRootProps) => {
  return (
    <div
      className={cn(
        'relative mb-2 flex h-7 w-full items-center gap-0.5',
        className
      )}
      {...props}
    >
      {isActive && children}
    </div>
  )
}

export { NoteCardToolbarRoot }
