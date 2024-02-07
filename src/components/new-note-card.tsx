import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const NewNoteCard = React.forwardRef<HTMLButtonElement>(({ ...props }, ref) => {
  return (
    <button
      className="group relative flex flex-col gap-3 overflow-hidden rounded-md bg-zinc-900 p-5 text-left outline-none ring-2 ring-zinc-800 transition-all hover:bg-zinc-800/50 focus-visible:ring-violet-300"
      ref={ref}
      {...props}
    >
      <span className="text-sm font-medium text-zinc-200">Adicionar nota</span>
      <p className="text-sm leading-6 text-zinc-400">
        Grave uma nota em áudio que será convertida para texto automaticamente.
      </p>

      <div className="absolute right-0 top-0 bg-zinc-800 p-1.5 text-zinc-500 transition-colors group-focus-visible:bg-violet-300">
        <ArrowUpRight className="size-5 transition-colors group-focus-visible:text-zinc-900" />
      </div>
    </button>
  )
})

NewNoteCard.displayName = 'NewNoteCard'

export { NewNoteCard }
