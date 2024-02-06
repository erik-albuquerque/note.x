import logo from '../assets/logo.svg'
import { NewNoteCard } from '../components/new-note-card'
import { NoteCard } from '../components/note-card'

function App() {
  return (
    <main className="mx-auto max-w-6xl space-y-6 py-12">
      <img src={logo} alt="Notes" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-zinc-500"
        />
      </form>

      <div className="h-px bg-zinc-800" />

      <div className="grid auto-rows-[250px] grid-cols-3 gap-6">
        <NewNoteCard />

        <NoteCard />
      </div>
    </main>
  )
}

export { App }
