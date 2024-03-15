import { SaveNoteForm } from '../forms/save-note-form'
import { Dialog } from '../ui/dialog'

export type NewNoteCardDialogProps = {
  children: React.ReactNode
}

const NewNoteCardDialog: React.FC<NewNoteCardDialogProps> = ({
  children
}: NewNoteCardDialogProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Content className="md:max-w-4xl">
        <SaveNoteForm />
      </Dialog.Content>
    </Dialog.Root>
  )
}

export { NewNoteCardDialog }
