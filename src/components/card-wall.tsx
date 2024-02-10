import { useNotesStore } from '../store/use-notes-store'
import { PreviewNoteCardDialog } from './dialogs/preview-note-card-dialog'
import { NoteCard } from './note-card'

const CardWall: React.FC = () => {
  const { notes } = useNotesStore()

  return (
    <div className="grid auto-rows-[250px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <PreviewNoteCardDialog key={note.id} note={note}>
          <NoteCard note={note} />
        </PreviewNoteCardDialog>
      ))}
    </div>
  )
}

export { CardWall }
