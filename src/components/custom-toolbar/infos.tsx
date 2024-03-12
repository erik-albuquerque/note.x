import { format } from 'date-fns'
import { ComponentProps } from 'react'

import { fontNames } from '../../constants/font/font-names'
import { useTheme } from '../../hooks/use-theme'
import { Note } from '../../types/note'
import { cn } from '../../utils/cn'
import { capitalizeFirstLetter } from '../../utils/string/capitalize-first-letter'
import { countWords } from '../../utils/string/count-words'
import { themeBackgroundColorVariants } from '../../utils/variants/theme-background-color-variants'

type Infos = ComponentProps<'div'> & {
  currentNote: Note
}

const Infos: React.FC<Infos> = ({
  currentNote,
  className = undefined,
  ...props
}: Infos) => {
  const { theme, systemTheme } = useTheme()
  const isDarkTheme = theme === 'dark' || systemTheme === 'dark'

  const currentNoteThemeColor = currentNote.theme?.color
  const totalCharactersInNote = currentNote.content.length
  const totalWordsInNote = countWords(currentNote.content)

  const colorName = currentNoteThemeColor ?? 'default'
  const capitalizedColorName = isDarkTheme
    ? `${capitalizeFirstLetter(colorName)} dark`
    : capitalizeFirstLetter(colorName)

  const fontName = fontNames[currentNote.theme?.font ?? 'default']

  const formattedDate = format(currentNote.date, 'MMM dd, yyyy, h:mm a')

  const themeBackgroundClassName = themeBackgroundColorVariants({
    theme: currentNoteThemeColor
  })

  return (
    <div className={cn('space-y-3', className)} {...props}>
      <span className="text-base font-medium">Note info</span>
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <span className="text-sm">Font</span>
          <span className="font-medium">{fontName}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">Color</span>
          <div className="flex items-center gap-2">
            <span className="font-medium">{capitalizedColorName}</span>
            <div
              data-color={colorName}
              className={cn('size-3.5 rounded-full', themeBackgroundClassName)}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">Words</span>
          <span className="font-medium">{totalWordsInNote}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">Characters</span>
          <span className="font-medium">{totalCharactersInNote}</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm">Created</span>
          <span className="ml-8 font-medium">{formattedDate}</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm">Modified</span>
          <span className="ml-8 font-medium">{formattedDate}</span>
        </div>
      </div>
    </div>
  )
}

export { Infos }
