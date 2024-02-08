import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { toast } from 'sonner'

import { useSpeechRecognition } from '../../hooks/use-speech-recognition'
import { useNotesStore } from '../../store/use-notes-store'

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
        <span className="text-base font-medium text-zinc-300 md:text-sm">
          Adicionar nota
        </span>
        {shouldShowOnboarding ? (
          <p className="text-base leading-6 text-zinc-400 md:text-sm">
            Comece{' '}
            <button
              type="button"
              onClick={handleStartRecording}
              className="font-medium text-violet-300 hover:underline"
            >
              gravando uma nota
            </button>{' '}
            em áudio ou se preferir{' '}
            <button
              type="button"
              onClick={handleStartEditor}
              className="font-medium text-violet-300 hover:underline"
            >
              utilize apenas texto
            </button>
            .
          </p>
        ) : (
          <textarea
            autoFocus
            className="flex-1 resize-none bg-transparent text-base leading-6 text-zinc-400 outline-none md:text-sm"
            onChange={handleContentChanged}
            value={content}
          />
        )}
      </div>

      {isRecording ? (
        <button
          type="button"
          onClick={handleStopRecording}
          className=" flex w-full items-center justify-center gap-2 bg-zinc-900 py-4 text-center text-base font-medium text-white outline-none transition-colors hover:bg-zinc-900/80 md:text-sm"
        >
          <div className="size-[10px] animate-pulse rounded-full bg-red-500" />
          Gravando! (clique p/ interromper)
        </button>
      ) : (
        <button
          type="button"
          onClick={handleSaveNote}
          className="w-full bg-violet-400 py-4 text-center text-base font-medium text-violet-950 outline-none transition-colors hover:bg-violet-500 md:text-sm"
        >
          Salvar nota
        </button>
      )}
    </form>
  )
}

export { SaveNoteForm }
