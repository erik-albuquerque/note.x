import React, { ComponentProps, useCallback, useState } from 'react'

import { Note } from '../../types/note'
import { cn } from '../../utils/cn'
import { formatDisplayDate } from '../../utils/date/format-display-date'
import {
  themeBackgroundColorVariants,
  type ThemeBackgroundColorVariantsProps
} from '../../utils/variants/theme-background-color-variants'
import {
  themeBorderVariants,
  type ThemeBorderVariantsProps
} from '../../utils/variants/theme-border-variants'
import { themeFontVariants } from '../../utils/variants/theme-font-variants'
import { CustomToolbar } from '../custom-toolbar'
import { PreviewNoteDialog } from '../dialogs/preview-note-dialog'
import { MarkdownPreview } from '../markdown/markdown-preview'
import { useHover } from './hooks/use-hover'

/*
  I don't know why, but it only works if I leave this code commented out, 
  if I remove it, the styles don't work
*/

// const borderVariants = cva(null, {
//   variants: {
//     border: {
//       coral:
//         'data-[color=coral]:border-coral dark:data-[color=coral]:border-coral-dark',
//       peach:
//         'data-[color=peach]:border-peach dark:data-[color=peach]:border-peach-dark',
//       sand: 'data-[color=sand]:border-sand dark:data-[color=sand]:border-sand-dark',
//       mint: 'data-[color=mint]:border-mint dark:data-[color=mint]:border-mint-dark',
//       sage: 'data-[color=sage]:border-sage dark:data-[color=sage]:border-sage-dark',
//       fog: 'data-[color=fog]:border-fog dark:data-[color=fog]:border-fog-dark',
//       storm:
//         'data-[color=storm]:border-storm dark:data-[color=storm]:border-storm-dark',
//       dusk: 'data-[color=dusk]:border-dusk dark:data-[color=dusk]:border-dusk-dark',
//       blossom:
//         'data-[color=blossom]:border-blossom dark:data-[color=blossom]:border-blossom-dark',
//       clay: 'data-[color=clay]:border-clay dark:data-[color=clay]:border-clay-dark',
//       chalk:
//         'data-[color=chalk]:border-chalk dark:data-[color=chalk]:border-chalk-dark',
//       default: 'border-border'
//     }
//   },
//   defaultVariants: {
//     border: 'default'
//   }
// })

export type NoteCardProps = ComponentProps<'div'> &
  ThemeBackgroundColorVariantsProps &
  ThemeBorderVariantsProps & {
    currentNote: Note
  }

const NoteCard = React.memo(
  ({ currentNote, className = undefined, theme, ...props }: NoteCardProps) => {
    const { isHovered, handleHoverOver, handleHoverLeave } = useHover()

    const [isPreviewNoteDialogOpen, setIsPreviewNoteDialogOpen] =
      useState(false)

    const handleShowPreviewNoteDialog = useCallback(() => {
      setIsPreviewNoteDialogOpen(true)
    }, [])

    const currentNoteThemeColor = currentNote.theme?.color

    const colorName = currentNoteThemeColor ?? 'default'

    const formattedAlternativeDate = formatDisplayDate({
      date: currentNote.date
    })

    const themeFontClassName = themeFontVariants({
      theme: currentNote.theme?.font
    })
    const themeBackgroundClassName = themeBackgroundColorVariants({
      theme
    })
    const themeBorderClassName = themeBorderVariants({
      theme: currentNoteThemeColor
    })

    return (
      <div
        data-color={colorName}
        className={cn(
          'relative flex min-w-64 flex-col gap-3',
          'cursor-pointer outline-none',
          'rounded-lg p-3 pb-0 text-left',
          'border-2 transition-colors focus-visible:border-primary',
          themeBackgroundClassName,
          themeBorderClassName,
          className
        )}
        onMouseOver={handleHoverOver}
        onMouseLeave={handleHoverLeave}
        {...props}
      >
        <div
          className={cn(
            'flex w-full flex-1 flex-col gap-2',
            'cursor-pointer overflow-hidden'
          )}
          onClick={handleShowPreviewNoteDialog}
        >
          <span
            className={cn(
              'truncate text-base font-medium text-foreground',
              {
                'text-zinc-950 dark:text-foreground': currentNoteThemeColor
              },
              themeFontClassName
            )}
          >
            {currentNote.title}
          </span>

          <div className="flex flex-col gap-2 transition-colors">
            <MarkdownPreview
              source={currentNote.content}
              className={cn(
                'bg-transparent',
                'line-clamp-[13] h-full md:line-clamp-[20]',
                'text-wrap text-base text-background md:text-sm',
                {
                  'text-zinc-950 dark:text-foreground': currentNoteThemeColor
                },
                themeFontClassName
              )}
            />

            <span
              className={cn(
                'text-base text-muted-foreground md:text-xs',
                {
                  'text-zinc-950 dark:text-foreground': currentNoteThemeColor
                },
                themeFontClassName
              )}
            >
              {formattedAlternativeDate}
            </span>
          </div>
        </div>

        <CustomToolbar open={isHovered} currentNote={currentNote} />

        <PreviewNoteDialog
          open={isPreviewNoteDialogOpen}
          onOpenChange={setIsPreviewNoteDialogOpen}
          currentNote={currentNote}
          theme={currentNoteThemeColor}
        />
      </div>
    )
  },
  (prevProps, nextProps) => {
    return Object.is(prevProps.currentNote, nextProps.currentNote)
  }
)

NoteCard.displayName = 'NoteCard'

export { NoteCard }
