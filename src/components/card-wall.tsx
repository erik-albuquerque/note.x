import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import { useNotesStore } from '../store/use-notes-store'
import { PreviewNoteCardDialog } from './dialogs/preview-note-card-dialog'
import { NoteCard } from './note-card'

const CardWall: React.FC = () => {
  const { notes } = useNotesStore()

  const columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3 }

  return (
    <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
      <Masonry gutter="0.5rem">
        {notes.map((note) => (
          <PreviewNoteCardDialog key={note.id} note={note}>
            <NoteCard note={note} />
          </PreviewNoteCardDialog>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  )
}

export { CardWall }
