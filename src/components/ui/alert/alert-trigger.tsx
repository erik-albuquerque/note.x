import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { AlertDialogTriggerProps } from '@radix-ui/react-alert-dialog'

const AlertTrigger: React.FC<AlertDialogTriggerProps> = ({
  children,
  ...props
}: AlertDialogTriggerProps) => {
  return (
    <AlertDialog.Trigger asChild {...props}>
      {children}
    </AlertDialog.Trigger>
  )
}

export { AlertTrigger }
