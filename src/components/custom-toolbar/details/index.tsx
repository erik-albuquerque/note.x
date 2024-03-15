import { format } from 'date-fns'
import { ComponentProps } from 'react'

import { fontNames } from '../../../constants/font/font-names'
import { useTheme } from '../../../hooks/use-theme'
import { Note } from '../../../types/note'
import { cn } from '../../../utils/cn'
import { capitalizeFirstLetter } from '../../../utils/string/capitalize-first-letter'
import { countWords } from '../../../utils/string/count-words'
import { DetailsInfoItem } from './details-info-item'

type DetailsProps = ComponentProps<'div'> & {
  currentNote: Note
}

const Details: React.FC<DetailsProps> = ({
  currentNote,
  className = undefined,
  ...props
}: DetailsProps) => {
  const { isDarkTheme } = useTheme()

  const currentNoteThemeColor = currentNote.theme?.color
  const totalCharactersInNote = currentNote.content.length
  const totalWordsInNote = countWords(currentNote.content)

  const colorName = currentNoteThemeColor ?? 'default'
  const capitalizedColorName =
    isDarkTheme === true
      ? `${capitalizeFirstLetter(colorName)} dark`
      : capitalizeFirstLetter(colorName)

  const fontName =
    currentNote.theme?.font === 'default'
      ? 'Inter'
      : fontNames[currentNote.theme?.font ?? 'default']

  const formattedDate = format(currentNote.date, 'MMM dd, yyyy, h:mm a')

  return (
    <div className={cn('space-y-3', className)} {...props}>
      <span className="text-base font-medium">Details</span>

      <div className="flex flex-col gap-1">
        <DetailsInfoItem.Root>
          <DetailsInfoItem.Title>Font</DetailsInfoItem.Title>
          <DetailsInfoItem.Description>{fontName}</DetailsInfoItem.Description>
        </DetailsInfoItem.Root>

        <DetailsInfoItem.Root>
          <DetailsInfoItem.Title>Color</DetailsInfoItem.Title>

          <div className="flex items-center gap-2">
            <DetailsInfoItem.Description>
              {capitalizedColorName}
            </DetailsInfoItem.Description>

            <DetailsInfoItem.DotColor color={colorName} />
          </div>
        </DetailsInfoItem.Root>

        <DetailsInfoItem.Root>
          <DetailsInfoItem.Title>Words</DetailsInfoItem.Title>
          <DetailsInfoItem.Description>
            {totalWordsInNote}
          </DetailsInfoItem.Description>
        </DetailsInfoItem.Root>

        <DetailsInfoItem.Root>
          <DetailsInfoItem.Title>Characters</DetailsInfoItem.Title>
          <DetailsInfoItem.Description>
            {totalCharactersInNote}
          </DetailsInfoItem.Description>
        </DetailsInfoItem.Root>

        <DetailsInfoItem.Root className="gap-2">
          <DetailsInfoItem.Title>Created</DetailsInfoItem.Title>
          <DetailsInfoItem.Description className="ml-8">
            {formattedDate}
          </DetailsInfoItem.Description>
        </DetailsInfoItem.Root>

        <DetailsInfoItem.Root className="gap-2">
          <DetailsInfoItem.Title>Modified</DetailsInfoItem.Title>
          <DetailsInfoItem.Description className="ml-8">
            {formattedDate}
          </DetailsInfoItem.Description>
        </DetailsInfoItem.Root>
      </div>
    </div>
  )
}

export { Details }
