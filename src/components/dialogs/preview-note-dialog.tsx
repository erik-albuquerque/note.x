import { type DialogProps } from '@radix-ui/react-dialog'

import { Note } from '../../types/note'
import { cn } from '../../utils/cn'
import { formatDisplayDate } from '../../utils/date/format-display-date'
import { countWords } from '../../utils/string/count-words'
import {
  themeBackgroundColorVariants,
  type ThemeBackgroundColorVariantsProps
} from '../../utils/variants/theme-background-color-variants'
import { themeFontVariants } from '../../utils/variants/theme-font-variants'
import { DeleteNoteAlert } from '../alerts/delete-note-alert'
import { MarkdownPreview } from '../markdown/markdown-preview'
import { Button } from '../ui/button'
import { Dialog } from '../ui/dialog'

/*
  I don't know why, but it only works if I leave this code commented out, 
  if I remove it, the styles don't work
*/

// const fontVariants = cva(null, {
//   variants: {
//     font: {
//       kode_mono: 'font-kode_mono',
//       ubuntu: 'font-ubuntu',
//       pixelify_sans: 'font-pixelify_sans',
//       lora: 'font-lora',
//       jetBrains_mono: 'font-jetBrains_mono',
//       roboto: 'font-roboto',
//       default: 'font-inter'
//     }
//   },
//   defaultVariants: {
//     font: 'default'
//   }
// })

export type PreviewNoteDialogProps = DialogProps &
  ThemeBackgroundColorVariantsProps & {
    currentNote: Note
  }

const PreviewNoteDialog: React.FC<PreviewNoteDialogProps> = ({
  currentNote,
  theme,
  ...props
}: PreviewNoteDialogProps) => {
  const totalCharactersInNote = currentNote.content.length
  const totalWordsInNote = countWords(currentNote.content)

  const formattedAlternativeDate = formatDisplayDate({
    date: currentNote.date
  })

  const currentNoteThemeColor = currentNote.theme?.color

  const themeFontClassName = themeFontVariants({
    theme: currentNote.theme?.font
  })

  return (
    <Dialog.Root {...props}>
      <Dialog.Content className="z-0 md:max-w-3xl">
        <div
          data-color={currentNoteThemeColor}
          className={cn(
            themeBackgroundColorVariants({
              theme,
              className: 'flex flex-1 flex-col gap-3 p-5'
            })
          )}
        >
          <div className="flex flex-col gap-1">
            <span
              className={cn(
                'text-xl font-medium leading-6 text-foreground',
                {
                  'text-zinc-950 dark:text-foreground': currentNoteThemeColor
                },
                themeFontClassName
              )}
            >
              {currentNote.title}
            </span>

            <span
              className={cn(
                'text-sm text-muted-foreground',
                {
                  'text-zinc-950 dark:text-foreground': currentNoteThemeColor
                },
                themeFontClassName
              )}
            >
              {formattedAlternativeDate} | {totalWordsInNote}{' '}
              {totalWordsInNote > 1 ? 'words' : 'word'} |{' '}
              {totalCharactersInNote}{' '}
              {totalCharactersInNote > 1 ? 'characters' : 'character'}
            </span>
          </div>

          <MarkdownPreview
            source={currentNote.content}
            className={cn(
              'bg-transparent',
              'text-base leading-6',
              'text-foreground',
              themeFontClassName
            )}
          />
        </div>

        <DeleteNoteAlert noteId={currentNote.id}>
          {/* TODO: Add Toolbar here */}
          <Button
            type="button"
            className={cn(
              'group w-full py-4 outline-none',
              'bg-zinc-900',
              'text-center text-base font-medium text-white md:text-sm'
            )}
          >
            Deseja{' '}
            <span className="text-red-400 group-hover:underline">
              apagar essa nota
            </span>
            ?
          </Button>
        </DeleteNoteAlert>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export { PreviewNoteDialog }
