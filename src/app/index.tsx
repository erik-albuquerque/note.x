import { Divider } from '../components/divider'
import { Logo } from '../components/logo'
import { NewNoteCard } from '../components/new-note-card'
import { NoteCard } from '../components/note-card'

function App() {
  return (
    <main className="mx-auto max-w-6xl space-y-6 py-12">
      <Logo />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-zinc-500"
        />
      </form>

      <Divider />

      <div className="grid auto-rows-[250px] grid-cols-3 gap-6">
        <NewNoteCard />

        <NoteCard />
      </div>
    </main>
  )
}

export { App }
