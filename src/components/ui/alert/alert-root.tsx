import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { AlertDialogProps } from '@radix-ui/react-alert-dialog'

const AlertRoot: React.FC<AlertDialogProps> = ({
  children,
  ...props
}: AlertDialogProps) => {
  return <AlertDialog.Root {...props}>{children}</AlertDialog.Root>
}

export { AlertRoot }
