import { commands, type ICommand } from '@uiw/react-md-editor'
import * as Lucide from 'lucide-react'

type MarkdownButtonOrderedListProps = ICommand

const MarkdownButtonOrderedList: MarkdownButtonOrderedListProps = {
  ...commands.orderedListCommand,
  icon: <Lucide.ListOrdered className="size-5" />
}

export { MarkdownButtonOrderedList }
