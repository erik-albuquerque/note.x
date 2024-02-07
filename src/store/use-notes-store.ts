import { create } from 'zustand'

import { Note, Notes } from '../types/note'
import { generateUuid } from '../utils/generate-uuid'

type NotesState = {
  notes: Notes
  onSaveNote: (content: string) => void
}

const useNotesStore = create<NotesState>((set) => ({
  notes: JSON.parse(localStorage.getItem('notes')!) ?? [],
  onSaveNote: (content) =>
    set((state) => {
      const note: Note = {
        id: generateUuid(),
        date: new Date(),
        content
      }

      const notes: Notes = [note, ...state.notes]

      localStorage.setItem('notes', JSON.stringify(notes))

      return {
        notes
      }
    })
}))

export { useNotesStore }
