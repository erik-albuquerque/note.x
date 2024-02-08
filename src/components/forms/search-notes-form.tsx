import { ChangeEvent, useState } from 'react'

import { useNotesStore } from '../../store/use-notes-store'

const SearchNotesForm: React.FC = () => {
  const { onSearchNotes } = useNotesStore()
  const [search, setSearch] = useState('')

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value

    setSearch(query)

    onSearchNotes(query)
  }

  return (
    <form className="w-full">
      <input
        type="text"
        placeholder="Busque em suas notas..."
        className="w-full bg-transparent text-2xl font-semibold tracking-tight outline-none placeholder:text-zinc-500 md:text-3xl"
        value={search}
        onChange={handleSearch}
      />
    </form>
  )
}

export { SearchNotesForm }
