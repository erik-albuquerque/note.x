import { CardWall } from '../components/card-wall'
import { Divider } from '../components/divider'
import { SearchNotesForm } from '../components/forms/search-notes-form'
import { Logo } from '../components/logo'

function App() {
  return (
    <main className="mx-auto max-w-5xl">
      <header className="w-full py-4">
        <Logo />
      </header>

      <div className="space-y-6 py-12">
        <SearchNotesForm />

        <Divider />

        <CardWall />
      </div>
    </main>
  )
}

export { App }
