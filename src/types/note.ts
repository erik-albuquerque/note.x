import { Color } from './color'
import { Font } from './font'

type Note = {
  id: string
  title: string
  date: Date
  content: string
  theme?: {
    color?: Color
    font?: Font
  }
}

type Notes = Note[]

export type { Note, Notes }
