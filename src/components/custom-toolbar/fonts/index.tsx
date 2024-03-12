import { FONTS_ARRAY } from '../../../constants/font/fonts-array'
import { Note } from '../../../types/note'
import { Font } from './font'

type FactoryFontsProps = {
  currentNote: Note
}

const FactoryFonts = ({ currentNote }: FactoryFontsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {FONTS_ARRAY.map((font) => (
        <Font
          key={font}
          font={font}
          currentNote={currentNote}
          isDefault={font === 'default'}
          isActive={currentNote.theme?.font === font}
        />
      ))}
    </div>
  )
}

export { FactoryFonts }
