import { create } from 'zustand'

import { Note, Notes } from '../types/note'
import { generateUuid } from '../utils/generate-uuid'

type NotesState = {
  notes: Notes
  onSaveNote: (title: string, content: string) => void
  onDeleteNote: (id: string) => void
  onSearchNotes: (query: string) => void
}

const useNotesStore = create<NotesState>((set) => ({
  notes: JSON.parse(localStorage.getItem('notes')!) ?? [],
  onSaveNote: (title, content) =>
    set((state) => {
      const note: Note = {
        id: generateUuid(),
        date: new Date(),
        title,
        content
      }

      const notes: Notes = [note, ...state.notes]

      localStorage.setItem('notes', JSON.stringify(notes))

      return {
        notes
      }
    }),
  onSearchNotes: (query) =>
    set((state) => {
      const filteredNotes =
        query !== ''
          ? state.notes.filter(
              (note) =>
                note.content
                  .toLocaleLowerCase()
                  .includes(query.toLocaleLowerCase()) ||
                note.title
                  .toLocaleLowerCase()
                  .includes(query.toLocaleLowerCase())
            )
          : JSON.parse(localStorage.getItem('notes')!) ?? []

      return {
        notes: filteredNotes
      }
    }),
  onDeleteNote: (id) =>
    set((state) => {
      const newNotes = state.notes.filter((note) => note.id !== id)

      localStorage.setItem('notes', JSON.stringify(newNotes))

      return {
        notes: newNotes
      }
    })
}))

export { useNotesStore }
