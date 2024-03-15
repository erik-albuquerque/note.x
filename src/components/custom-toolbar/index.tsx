import * as Lucide from 'lucide-react'
import React, { useEffect, useState } from 'react'

import { Note } from '../../types/note'
import { cn } from '../../utils/cn'
import { themeFontVariants } from '../../utils/variants/theme-font-variants'
import { DeleteNoteAlert } from '../alerts/delete-note-alert'
import { Toolbar } from '../ui/toolbar'
import { Tooltip } from '../ui/tooltip'
import { FactoryFonts } from './fonts'
import { Details } from './details'
import { FactoryPalette } from './palette'

type CustomToolbarProps = {
  currentNote: Note
  open?: boolean
}

const CustomToolbar: React.FC<CustomToolbarProps> = ({
  open,
  currentNote
}: CustomToolbarProps) => {
  const currentNoteThemeColor = currentNote.theme?.color
  const themeFontClassName = themeFontVariants({
    theme: currentNote.theme?.font
  })

  const [isDeleteNoteAlertOpen, setIsDeleteNoteAlertOpen] = useState(false)
  const [isToolbarViewOpen, setIsToolbarViewOpen] = useState(false)

  const handleShowDeleteNoteAlert = () => setIsDeleteNoteAlertOpen(true)

  const handleShowToolbar = () => setIsToolbarViewOpen(!isToolbarViewOpen)

  useEffect(() => {
    if (open === true || isToolbarViewOpen === false) return

    setIsToolbarViewOpen(false)
  }, [isToolbarViewOpen, open])
  return (
    <>
      <Toolbar.Root open={open}>
        <Toolbar.Content>
          <Tooltip.Root>
            <Tooltip.Trigger>
              <Toolbar.Button
                className={cn({
                  'hover:bg-muted-foreground/25': currentNoteThemeColor
                })}
                onClick={handleShowToolbar}
              >
                <Lucide.Palette
                  className={cn('size-4 text-foreground', {
                    'text-zinc-950 dark:text-foreground': currentNoteThemeColor
                  })}
                />
              </Toolbar.Button>
            </Tooltip.Trigger>

            <Tooltip.Content>Customize</Tooltip.Content>
          </Tooltip.Root>

          <Tooltip.Root>
            <Tooltip.Trigger>
              <Toolbar.Button
                className={cn({
                  'hover:bg-muted-foreground/25': currentNoteThemeColor
                })}
                onClick={handleShowDeleteNoteAlert}
              >
                <Lucide.Trash2
                  className={cn('size-4 text-foreground', {
                    'text-zinc-950 dark:text-foreground': currentNoteThemeColor
                  })}
                />
              </Toolbar.Button>
            </Tooltip.Trigger>

            <Tooltip.Content>Delete note</Tooltip.Content>
          </Tooltip.Root>

          <Tooltip.Root>
            <Tooltip.Trigger>
              <Toolbar.Button
                className={cn('cursor-help', {
                  'hover:bg-muted-foreground/25': currentNoteThemeColor
                })}
              >
                <Lucide.Info
                  className={cn('size-4 text-foreground', {
                    'text-zinc-950 dark:text-foreground': currentNoteThemeColor
                  })}
                />
              </Toolbar.Button>
            </Tooltip.Trigger>

            <Tooltip.Content>
              <Details currentNote={currentNote} />
            </Tooltip.Content>
          </Tooltip.Root>

          <Toolbar.View
            open={isToolbarViewOpen}
            className={cn(
              'w-full px-4 py-2',
              'flex flex-col',
              'absolute -bottom-36 left-8 z-10',
              'cursor-default rounded-lg border-2 border-border',
              'bg-background',
              'shadow-lg'
            )}
          >
            <span className="mb-3 text-sm font-medium text-foreground">
              Customize
            </span>

            <span className="mb-3 text-xs text-muted-foreground">Colors</span>

            <FactoryPalette currentNote={currentNote} />
            {/* TODO: Add custom color */}
            {/* <Lucide.Plus className="size-5 text-muted-foreground" /> */}

            <span className="mb-3 mt-5 text-xs text-muted-foreground">
              Fonts
            </span>

            {/* TODO: Add custom font */}
            <FactoryFonts currentNote={currentNote} />

            <span className="mb-3 mt-5 text-xs text-muted-foreground">
              Font preview
            </span>
            <div
              data-color={currentNoteThemeColor}
              className={cn(
                'flex items-center justify-center rounded-xl bg-muted/70 p-3'
              )}
            >
              <span
                className={cn('text-sm text-foreground', themeFontClassName)}
              >
                Preview of the selected font style.
              </span>
            </div>
          </Toolbar.View>
        </Toolbar.Content>
      </Toolbar.Root>

      {isDeleteNoteAlertOpen === true && (
        <DeleteNoteAlert
          noteId={currentNote.id}
          open={isDeleteNoteAlertOpen}
          onOpenChange={setIsDeleteNoteAlertOpen}
        />
      )}
    </>
  )
}
export { CustomToolbar }
