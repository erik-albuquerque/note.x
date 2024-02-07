import { useNotesStore } from '../store/use-notes-store'
import { NewNoteCardDialog } from './dialogs/new-note-card-dialog'
import { PreviewNoteCardDialog } from './dialogs/preview-note-card-dialog'
import { NewNoteCard } from './new-note-card'
import { NoteCard } from './note-card'

const CardWall: React.FC = () => {
  const { notes } = useNotesStore()

  return (
    <div className="grid auto-rows-[250px] grid-cols-3 gap-6">
      <NewNoteCardDialog>
        <NewNoteCard />
      </NewNoteCardDialog>

      {notes.map((note) => (
        <PreviewNoteCardDialog key={note.id} note={note}>
          <NoteCard note={note} />
        </PreviewNoteCardDialog>
      ))}
    </div>
  )
}

export { CardWall }
