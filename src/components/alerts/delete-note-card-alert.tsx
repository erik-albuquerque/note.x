import { AlertDialogProps } from '@radix-ui/react-alert-dialog'
import { PropsWithChildren } from 'react'
import { toast } from 'sonner'

import { useNotesStore } from '../../store/use-notes-store'
import { cn } from '../../utils/cn'
import { Button } from '../button'
import { Alert } from './alert'

type DeleteNoteCardAlertProps = AlertDialogProps &
  PropsWithChildren & {
    noteId: string
  }

const DeleteNoteCardAlert: React.FC<DeleteNoteCardAlertProps> = ({
  noteId,
  children,
  ...props
}: DeleteNoteCardAlertProps) => {
  const { onDeleteNote } = useNotesStore()

  const handleDeleteNote = () => {
    onDeleteNote(noteId)
    toast.success('Nota deletada com sucesso!')
  }

  return (
    <Alert.Root {...props}>
      {children && <Alert.Trigger>{children}</Alert.Trigger>}
      <Alert.Content className="p-5">
        <Alert.Title className="text-lg font-medium text-foreground">
          Você tem certeza absoluta?
        </Alert.Title>
        <Alert.Description className="mb-5 mt-4 leading-normal text-muted-foreground">
          Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
          nota.
        </Alert.Description>
        <div className="flex justify-end gap-6">
          <Alert.Cancel asChild>
            <Button className="text-sm font-medium leading-none text-foreground outline-none">
              Cancelar
            </Button>
          </Alert.Cancel>
          <Alert.Action asChild>
            <Button
              onClick={handleDeleteNote}
              className={cn(
                'p-3 px-4',
                'text-sm font-medium leading-none',
                'rounded outline-none',
                'bg-destructive-foreground text-white transition-colors',
                'hover:bg-destructive-foreground/90'
              )}
            >
              Sim, apagar nota
            </Button>
          </Alert.Action>
        </div>
      </Alert.Content>
    </Alert.Root>
  )
}

export { DeleteNoteCardAlert }
