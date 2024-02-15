import { ChangeEvent, useState } from 'react'

import { useNotesStore } from '../../store/use-notes-store'
import { cn } from '../../utils/cn'

const SearchNotesForm: React.FC = () => {
  const { onSearchNotes } = useNotesStore()
  const [search, setSearch] = useState('')

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value

    /* FIXME: If the query is filled in when adding a new note, it overwrites 
    all the notes for the notes that were found in the search. */

    setSearch(query)

    onSearchNotes(query)
  }

  return (
    <form className="w-full">
      <input
        type="text"
        placeholder="Busque em suas notas..."
        className={cn(
          'dark:placeholder:text-muted',
          'bg-transparent text-foreground placeholder:text-zinc-300',
          'w-full outline-none',
          'text-xl font-semibold tracking-tight md:text-2xl'
        )}
        value={search}
        onChange={handleSearch}
      />
    </form>
  )
}

export { SearchNotesForm }
