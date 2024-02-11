import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { toast } from 'sonner'

import { useSpeechRecognition } from '../../hooks/use-speech-recognition'
import { useNotesStore } from '../../store/use-notes-store'
import { cn } from '../../utils/cn'

const SaveNoteForm: React.FC = () => {
  const { onSaveNote } = useNotesStore()
  const { speechText, startRecording, stopRecording, isRecording, error } =
    useSpeechRecognition()

  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true)
  const [content, setContent] = useState('')

  const handleStartEditor = () => {
    setShouldShowOnboarding(!shouldShowOnboarding)
  }

  const handleContentChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value

    setContent(value)

    if (value === '') {
      setShouldShowOnboarding(true)
    }
  }

  const handleSaveNote = (event: FormEvent) => {
    event.preventDefault()

    if (content === '') return

    onSaveNote(content)
    setContent('')
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

  useEffect(() => {
    setContent(speechText)
  }, [speechText])

  return (
    <form className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="text-base font-medium text-foreground md:text-sm">
          Adicionar nota
        </span>
        {shouldShowOnboarding ? (
          <p className="text-base leading-6 text-muted-foreground md:text-sm">
            Comece{' '}
            <button
              type="button"
              onClick={handleStartRecording}
              className={cn(
                'font-medium',
                'text-violet-950 dark:text-primary',
                'hover:underline'
              )}
            >
              gravando uma nota
            </button>{' '}
            em áudio ou se preferir{' '}
            <button
              type="button"
              onClick={handleStartEditor}
              className={cn(
                'font-medium',
                'text-violet-950 dark:text-primary',
                'hover:underline'
              )}
            >
              utilize apenas texto
            </button>
            .
          </p>
        ) : (
          <textarea
            autoFocus
            className={cn(
              'bg-transparent',
              'flex-1',
              'resize-none outline-none',
              'text-base leading-6 text-foreground md:text-sm'
            )}
            onChange={handleContentChanged}
            value={content}
          />
        )}
      </div>

      {isRecording ? (
        <button
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
        </button>
      ) : (
        <button
          type="button"
          onClick={handleSaveNote}
          className={cn(
            'w-full py-4 outline-none',
            'hover:bg-primary-foreground',
            'text-center text-base font-medium md:text-sm',
            'bg-primary text-violet-950 transition-colors'
          )}
        >
          Salvar nota
        </button>
      )}
    </form>
  )
}

export { SaveNoteForm }
