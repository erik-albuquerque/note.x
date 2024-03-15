import * as Lucide from 'lucide-react'
import React from 'react'

import { fontNames } from '../../../constants/font/font-names'
import { useNotesStore } from '../../../store/use-notes-store'
import { Font as FontTypes } from '../../../types/font'
import { Note } from '../../../types/note'
import { cn } from '../../../utils/cn'
import { themeFontVariants } from '../../../utils/variants/theme-font-variants'
import { ButtonProps, Button } from '../../ui/button'

type FontProps = ButtonProps & {
  font: FontTypes
  isActive?: boolean
  isDefault?: boolean
  currentNote: Note
}

const Font: React.FC<FontProps> = ({
  font,
  currentNote,
  isActive = false,
  isDefault = false,
  className = undefined,
  ...props
}: FontProps) => {
  const { onUpdateNote } = useNotesStore()

  const fontName = fontNames[font]
  const themeFontClassName = themeFontVariants({ theme: font })

  const currentNoteThemeColor = currentNote.theme?.color

  const handleUpdateNoteFont = (font: FontTypes) => {
    onUpdateNote(currentNote.id, {
      theme: { font, color: currentNoteThemeColor }
    })
  }

  const handleUpdateDefaultNoteFont = () => {
    onUpdateNote(currentNote.id, {
      theme: { font: 'default', color: currentNoteThemeColor }
    })
  }

  const handleFontClick = () => {
    if (currentNote.theme?.font === font) return

    if (isDefault) {
      handleUpdateDefaultNoteFont()
    }

    handleUpdateNoteFont(font)
  }

  return (
    <Button
      data-active={isActive}
      disabled={isActive}
      className={cn(
        'relative',
        'flex w-fit flex-col items-center justify-center gap-2 p-2',
        'rounded-md border-2 border-border focus-visible:outline-none',
        'hover:bg-border',
        'focus-visible:border-violet-400 data-[active=true]:border-violet-400',
        'transition-colors',
        'disabled:cursor-not-allowed disabled:hover:bg-inherit',
        className
      )}
      onClick={handleFontClick}
      {...props}
    >
      <>
        {isDefault === true ? null : (
          <span className={cn('text-base text-foreground', themeFontClassName)}>
            Ag
          </span>
        )}

        <span
          className={cn(
            'text-wrap text-sm text-muted-foreground',
            {
              'text-foreground': isDefault === true || isActive === true
            },
            themeFontClassName
          )}
        >
          {fontName}
        </span>

        {isActive === true && (
          <div
            className={cn(
              'absolute -right-1.5 -top-1.5',
              'flex size-4 items-center justify-center rounded-full',
              'bg-violet-400'
            )}
          >
            <Lucide.Check className="size-[14px] text-white" />
          </div>
        )}
      </>
    </Button>
  )
}

export { Font }
