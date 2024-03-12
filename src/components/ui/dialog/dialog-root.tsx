import * as Dialog from '@radix-ui/react-dialog'
import { type DialogProps } from '@radix-ui/react-dialog'

const DialogRoot: React.FC<DialogProps> = ({
  children,
  ...props
}: DialogProps) => {
  return <Dialog.Root {...props}>{children}</Dialog.Root>
}

export { DialogRoot }
