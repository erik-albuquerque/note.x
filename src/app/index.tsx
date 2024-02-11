import { Toaster } from 'sonner'

import { CardWall } from '../components/card-wall'
import { NewNoteCardDialog } from '../components/dialogs/new-note-card-dialog'
import { Divider } from '../components/divider'
import { SearchNotesForm } from '../components/forms/search-notes-form'
import { Logo } from '../components/logo'
import { NewNoteCard } from '../components/new-note-card'
import { ToggleTheme } from '../components/toggle-theme'
import { useTheme } from '../hooks/use-theme'

function App() {
  const { theme } = useTheme()

  return (
    <main className="mx-auto min-h-screen max-w-5xl">
      <header className="flex w-full justify-between px-5 py-4 xl:px-0">
        <Logo />

        <ToggleTheme />
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

      <Toaster richColors theme={theme} />
    </main>
  )
}

export { App }
