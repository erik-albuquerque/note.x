import { ChangeEvent, useState } from 'react'

import { useNotesStore } from '../../../store/use-notes-store'
import { CustomSearchBar, hotKey } from './custom-search-bar'

const SearchNotesForm: React.FC = () => {
  const { onSearchNotes } = useNotesStore()
  const [search, setSearch] = useState('')

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value

    if (query === hotKey) {
      return
    }

    setSearch(query)
    onSearchNotes(query)
  }

  return (
    <form className="flex items-center gap-2">
      <CustomSearchBar value={search} onChange={handleSearch} />
    </form>
  )
}

export { SearchNotesForm }
