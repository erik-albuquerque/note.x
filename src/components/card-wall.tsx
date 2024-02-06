import { NewNoteCardDialog } from './dialogs/new-note-card-dialog'
import { PreviewNoteCardDialog } from './dialogs/preview-note-card-dialog'
import { NewNoteCard } from './new-note-card'
import { NoteCard } from './note-card'

const note = { date: new Date(), content: 'test' }

const CardWall: React.FC = () => {
  return (
    <div className="grid auto-rows-[250px] grid-cols-3 gap-6">
      <NewNoteCardDialog>
        <NewNoteCard />
      </NewNoteCardDialog>

      <PreviewNoteCardDialog note={note}>
        <NoteCard note={note} />
      </PreviewNoteCardDialog>
    </div>
  )
}

export { CardWall }
