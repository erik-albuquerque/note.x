import { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'sonner'

const SaveNoteForm: React.FC = () => {
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
    toast.success('Nota criada com sucesso!')
  }

  return (
    <form onSubmit={handleSaveNote} className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="text-sm font-medium text-zinc-300">
          Adicionar nota
        </span>
        {shouldShowOnboarding ? (
          <p className="text-sm leading-6 text-zinc-400">
            Comece{' '}
            <button className="font-medium text-violet-300 hover:underline">
              gravando uma nota
            </button>{' '}
            em áudio ou se preferir{' '}
            <button
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
            className="flex-1 resize-none bg-transparent text-sm leading-6 text-zinc-400 outline-none"
            onChange={handleContentChanged}
            value={content}
          />
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-violet-400 py-4 text-center text-sm font-medium text-violet-950 outline-none transition-colors hover:bg-violet-500"
      >
        Salvar nota
      </button>
    </form>
  )
}

export { SaveNoteForm }
