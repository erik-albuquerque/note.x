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

const SaveNoteForm: React.FC = () => {
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

  useEffect(() => {
    setContent(speechText)
  }, [speechText])

  useEffect(() => {
    if (isEmptyString(content) === false) return
    setContent(markdownDefaultTemplate)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <form className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col gap-3 p-5">
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
          <p className="text-base leading-6 text-muted-foreground md:text-sm">
            Comece{' '}
            <Button
              type="button"
              onClick={handleStartRecording}
              className={cn(
                'font-medium',
                'text-violet-950 dark:text-primary',
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
                'text-violet-950 dark:text-primary',
                'hover:underline'
              )}
            >
              utilize apenas texto
            </Button>
            .
          </p>
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
                height={636}
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

      {isRecording === true ? (
        <Button
          type="button"
          onClick={handleStopRecording}
          className={cn(
            'py-4 outline-none',
            'flex w-full items-center justify-center gap-2',
            'text-center text-base font-medium text-white md:text-sm',
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
            'w-full py-4 outline-none',
            'hover:bg-primary-foreground',
            'text-center text-base font-medium md:text-sm',
            'bg-primary text-cyan-950 transition-colors'
          )}
        >
          Salvar nota
        </Button>
      )}
    </form>
  )
}

export { SaveNoteForm }
