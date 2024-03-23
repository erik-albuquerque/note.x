import { useState } from 'react'

import { SaveNoteForm } from '../forms/save-note-form'
import { Dialog } from '../ui/dialog'

export type NewNoteCardDialogProps = {
  children: React.ReactNode
}

const NewNoteCardDialog: React.FC<NewNoteCardDialogProps> = ({
  children
}: NewNoteCardDialogProps) => {
  const [open, setOpen] = useState(false)

  /**
   * FIXME: When the `Dialog` is closed, the css `overflow: hidden (these
   * styles are from radix-ui itself) remains in the `body` styles preventing
   * scrolling on the note wall
   */

  const handleOnCloseModal = () => {
    setOpen(false)
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Content className="md:max-w-4xl">
        <SaveNoteForm onCloseModal={handleOnCloseModal} />
      </Dialog.Content>
    </Dialog.Root>
  )
}

export { NewNoteCardDialog }
