import * as Dialog from '@radix-ui/react-dialog'
import { type DialogTriggerProps } from '@radix-ui/react-dialog'

const DialogTrigger: React.FC<DialogTriggerProps> = ({
  children,
  ...props
}: DialogTriggerProps) => {
  return (
    <Dialog.Trigger asChild {...props}>
      {children}
    </Dialog.Trigger>
  )
}

export { DialogTrigger }
