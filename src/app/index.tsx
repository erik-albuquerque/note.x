import { CardWall } from '../components/card-wall'
import { Divider } from '../components/divider'
import { SearchNotesForm } from '../components/forms/search-notes-form'
import { Logo } from '../components/logo'

function App() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl">
      <header className="w-full px-5 py-4 xl:px-0">
        <Logo />
      </header>

      <div className="space-y-6 px-5 py-12 xl:px-0">
        <SearchNotesForm />

        <Divider />

        <div className="flex flex-col gap-8">
          {/* TODO: Hide create new note button
            Show: when query search is empty or when searching notes.
          */}
          <NewNoteCardDialog>
            <NewNoteCard />
          </NewNoteCardDialog>

          <CardWall />
        </div>
      </div>
    </main>
  )
}

export { App }
