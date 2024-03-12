import { COLORS_ARRAY } from '../../../constants/colors-array'
import { useNotesStore } from '../../../store/use-notes-store'
import { Color as ColorTypes } from '../../../types/color'
import { Note } from '../../../types/note'
import { Color } from './color'

type FactoryPaletteProps = {
  currentNote: Note
}

const FactoryPalette: React.FC<FactoryPaletteProps> = ({
  currentNote
}: FactoryPaletteProps) => {
  const { onUpdateNote } = useNotesStore()

  const currentNoteThemeColor = currentNote.theme?.color

  const handleUpdateNoteColor = (color: ColorTypes) => {
    onUpdateNote(currentNote.id, {
      theme: { color, font: currentNote.theme?.font }
    })
  }

  const handleUpdateDefaultNoteColor = () => {
    onUpdateNote(currentNote.id, {
      theme: { color: undefined, font: currentNote.theme?.font }
    })
  }

  const handleColorClick = (color: ColorTypes) => {
    if (currentNoteThemeColor === color) return

    if (color === 'default') {
      handleUpdateDefaultNoteColor()
    }

    handleUpdateNoteColor(color)
  }

  return (
    <div className="flex flex-row flex-wrap items-center gap-2">
      {COLORS_ARRAY.map((color) => {
        const isActive = color === currentNoteThemeColor
        const isDefault = color === 'default'

        return (
          <Color
            key={color}
            colorName={color}
            isActive={isActive}
            isDefault={isDefault}
            onClick={() => handleColorClick(color)}
          />
        )
      })}
    </div>
  )
}

export { FactoryPalette }
