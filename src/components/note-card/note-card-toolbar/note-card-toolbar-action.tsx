import { cn } from '../../../utils/cn'
import { Button, type ButtonProps } from '../../button'

export type NoteCardToolbarActionProps = ButtonProps

const NoteCardToolbarAction: React.FC<NoteCardToolbarActionProps> = ({
  children,
  className = undefined,
  ...props
}: NoteCardToolbarActionProps) => {
  return (
    <Button
      className={cn(
        'rounded-full p-1.5 transition-colors hover:bg-border',
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}

export { NoteCardToolbarAction }
