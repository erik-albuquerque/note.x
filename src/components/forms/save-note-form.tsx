import * as Lucide from 'lucide-react'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { toast } from 'sonner'

import { useSpeechRecognition } from '../../hooks/use-speech-recognition'
import { useNotesStore } from '../../store/use-notes-store'
import { cn } from '../../utils/cn'
import { isEmptyString } from '../../utils/string/is-empty-string'
import { MarkdownEditor } from '../markdown/markdown-editor'
import { markdownDefaultTemplate } from '../markdown/markdown-editor/markdown-templates'
import { Button } from '../ui/button'

type SaveNoteFormProps = {
  onCloseModal: () => void
}

const SaveNoteForm: React.FC<SaveNoteFormProps> = ({
  onCloseModal
}: SaveNoteFormProps) => {
  const { onSaveNote } = useNotesStore()
  const { speechText, startRecording, stopRecording, isRecording, error } =
    useSpeechRecognition()

  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true)
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')

  const handleStartEditor = () => {
    setShouldShowOnboarding(!shouldShowOnboarding)
  }

  const handleContentChanged = (value: string) => {
    setContent(value)
  }

  const handleTitleChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const resetFields = () => {
    setContent('')
    setTitle('')
  }

  const handleSaveNote = (event: FormEvent) => {
    event.preventDefault()

    if (content === '' || title === '') {
      toast.error('Preencha todos os campos antes de salvar.')
      return
    }

    onSaveNote(title, content)
    resetFields()
    setShouldShowOnboarding(true)
    toast.success('Nota criada com sucesso!')
  }

  const handleStartRecording = () => {
    /* FIXME: When you start recording, if you delete the 
      text from the text area, it goes back to the panel 
      and still continues recording, and when you press "stop", 
      an error occurs in the speech API code 
    */

    if (error) {
      toast.error(error)
      return
    }

    setShouldShowOnboarding(false)

    startRecording()
  }

  const handleStopRecording = () => {
    stopRecording()
  }

  const handleGoBack = () => {
    resetFields()
    stopRecording()
    setShouldShowOnboarding(true)
  }

  const handleOnCloseModal = () => {
    if (isRecording) {
      stopRecording()
    }

    resetFields()

    onCloseModal()
  }

  useEffect(() => {
    setContent(speechText)
  }, [speechText])

  useEffect(() => {
    if (isEmptyString(content) === false) return
    setContent(markdownDefaultTemplate)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <form className="flex flex-1 flex-col p-5">
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-center gap-2">
          {shouldShowOnboarding === false && (
            <Button type="button" onClick={handleGoBack}>
              <Lucide.ChevronLeft className="size-6 text-foreground hover:text-muted-foreground" />
            </Button>
          )}
          <span className="text-xl font-medium text-foreground">
            Adicionar nota
          </span>
        </div>

        {shouldShowOnboarding === true ? (
          <>
            <p className="text-base leading-6 text-muted-foreground md:text-sm">
              Comece{' '}
              <Button
                type="button"
                onClick={handleStartRecording}
                className={cn(
                  'font-medium',
                  'text-cyan-700 dark:text-primary',
                  'hover:underline'
                )}
              >
                gravando uma nota
              </Button>{' '}
              em áudio ou se preferir{' '}
              <Button
                type="button"
                onClick={handleStartEditor}
                className={cn(
                  'font-medium',
                  'text-cyan-700 dark:text-primary',
                  'hover:underline'
                )}
              >
                utilize apenas texto
              </Button>
              .
            </p>

            <div className="mt-4 flex max-w-md flex-row gap-3 rounded-lg border border-border bg-background p-4">
              <div>
                <Lucide.AlertCircle className="size-5 text-foreground md:size-4" />
              </div>
              <div className="flex flex-col gap-1">
                <strong className="text-lg font-medium leading-none tracking-tight text-foreground md:text-base">
                  Warning
                </strong>
                <span className="text-base text-foreground md:text-sm">
                  {`If you're about to make an audio annotation, be aware that audio capture is still in beta.`}
                </span>
              </div>
            </div>
          </>
        ) : (
          <div className="mt-5 flex flex-col gap-5">
            <input
              type="text"
              placeholder="Título"
              className="bg-transparent text-lg text-foreground outline-none placeholder:text-base"
              value={title}
              onChange={handleTitleChanged}
            />

            <MarkdownEditor.Root>
              <MarkdownEditor.Label className="text-base text-foreground">
                Content
              </MarkdownEditor.Label>
              <MarkdownEditor.Editor
                autoFocus
                height={620}
                onChange={(value) => handleContentChanged(value ?? '')}
                value={content}
                className={cn(
                  'flex-1 text-base leading-6 text-foreground md:text-[15px]'
                )}
              />
            </MarkdownEditor.Root>
          </div>
        )}
      </div>

      <div className="flex flex-row gap-4 self-end">
        <Button
          type="button"
          className={cn(
            'px-6 py-2',
            'border border-border ',
            'text-center text-base font-medium text-foreground md:text-sm',
            'rounded-lg outline-none',
            'transition-colors hover:bg-muted/50'
          )}
          onClick={handleOnCloseModal}
        >
          Cancel
        </Button>

        {isRecording === true ? (
          <Button
            type="button"
            onClick={handleStopRecording}
            className={cn(
              'rounded-lg px-6 py-2 outline-none',
              'flex w-full items-center justify-center gap-2',
              'text-center text-sm font-medium text-white md:text-xs',
              'bg-zinc-900 transition-colors hover:bg-zinc-900/90 dark:hover:bg-zinc-900/80'
            )}
          >
            <div
              className={cn(
                'size-[10px] rounded-full',
                'animate-pulse bg-destructive-foreground'
              )}
            />
            Gravando! (clique p/ interromper)
          </Button>
        ) : (
          <Button
            type="button"
            onClick={handleSaveNote}
            className={cn(
              'rounded-lg px-6 py-2 outline-none',
              'hover:bg-primary-foreground',
              'text-center text-base font-medium md:text-sm',
              'bg-primary text-background transition-colors'
            )}
          >
            Save
          </Button>
        )}
      </div>
    </form>
  )
}

export { SaveNoteForm }
