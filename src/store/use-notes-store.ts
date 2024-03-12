import { create } from 'zustand'

import { Note, Notes } from '../types/note'
import { generateUuid } from '../utils/string/generate-uuid'

type NotesState = {
  notes: Notes
  onSaveNote: (title: string, content: string) => void
  onDeleteNote: (id: string) => void
  onSearchNotes: (query: string) => void
  onUpdateNote: (id: string, note: Partial<Note>) => void
}

const useNotesStore = create<NotesState>((set) => ({
  notes: JSON.parse(localStorage.getItem('notes')!) ?? [],
  onSaveNote: (title, content) =>
    set((state) => {
      const note: Note = {
        id: generateUuid(),
        date: new Date(),
        title,
        content,
        theme: {
          font: 'default'
        }
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
    }),
  onUpdateNote: (id, note) =>
    set((state) => {
      if (!note) {
        return {
          notes: state.notes
        }
      }

      const oldNotes = [...state.notes]

      const oldNote = oldNotes.find((note) => note.id === id)

      if (!oldNote) {
        return {
          notes: oldNotes
        }
      }

      oldNotes[oldNotes.findIndex((note) => note.id === id)] = {
        id: note.id ?? oldNote.id,
        title: note.title ?? oldNote.title,
        content: note.content ?? oldNote.content,
        theme: note.theme ?? oldNote.theme,
        date: note.date ?? oldNote.date
      }

      localStorage.setItem('notes', JSON.stringify(oldNotes))

      return {
        notes: oldNotes
      }
    })
}))

export { useNotesStore }
