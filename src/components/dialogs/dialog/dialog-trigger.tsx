import * as Dialog from '@radix-ui/react-dialog'
import { DialogTriggerProps } from '@radix-ui/react-dialog'

const DialogTrigger: React.FC<DialogTriggerProps> = ({
  children,
  ...rest
}: DialogTriggerProps) => {
  return (
    <Dialog.Trigger asChild {...rest}>
      {children}
    </Dialog.Trigger>
  )
}

export { DialogTrigger }
