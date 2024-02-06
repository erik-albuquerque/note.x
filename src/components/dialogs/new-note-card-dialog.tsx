import { SaveNoteForm } from '../forms/save-note-form'
import { Dialog } from './dialog'

type NewNoteCardDialogProps = {
  children: React.ReactNode
}

const NewNoteCardDialog: React.FC<NewNoteCardDialogProps> = ({
  children
}: NewNoteCardDialogProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Content>
        <SaveNoteForm />
      </Dialog.Content>
    </Dialog.Root>
  )
}

export { NewNoteCardDialog }
