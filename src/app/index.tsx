import { CardWall } from '../components/card-wall'
import { Divider } from '../components/divider'
import { SearchNotesForm } from '../components/forms/search-notes-form'
import { Logo } from '../components/logo'

function App() {
  return (
    <main className="mx-auto max-w-6xl space-y-6 py-12">
      <Logo />

      <SearchNotesForm />

      <Divider />

      <CardWall />
    </main>
  )
}

export { App }
