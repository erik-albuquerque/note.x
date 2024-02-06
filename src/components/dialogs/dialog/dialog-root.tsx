import * as Dialog from '@radix-ui/react-dialog'
import { DialogProps } from '@radix-ui/react-dialog'

const DialogRoot: React.FC<DialogProps> = ({
  children,
  ...rest
}: DialogProps) => {
  return <Dialog.Root {...rest}>{children}</Dialog.Root>
}

export { DialogRoot }
