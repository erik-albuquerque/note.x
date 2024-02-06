import { NewNoteCard } from './new-note-card'
import { NoteCard } from './note-card'

const CardWall: React.FC = () => {
  return (
    <div className="grid auto-rows-[250px] grid-cols-3 gap-6">
      <NewNoteCard />

      <NoteCard note={{ date: new Date(), content: 'test' }} />
    </div>
  )
}

export { CardWall }
