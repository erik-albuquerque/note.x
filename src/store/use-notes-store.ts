import { create } from 'zustand'

import { Notes } from '../types/note'
import { generateUuid } from '../utils/generate-uuid'

type NotesState = {
  notes: Notes
  onSaveNote: (content: string) => void
}

const useNotesStore = create<NotesState>((set) => ({
  notes: [],
  onSaveNote: (content) =>
    set((state) => ({
      notes: [{ id: generateUuid(), date: new Date(), content }, ...state.notes]
    }))
}))

export { useNotesStore }
