import { commands, type ICommand } from '@uiw/react-md-editor'
import * as Lucide from 'lucide-react'

type MarkdownButtonTodoListProps = ICommand

const MarkdownButtonTodoList: MarkdownButtonTodoListProps = {
  ...commands.checkedListCommand,
  icon: <Lucide.ListChecks className="size-5" />
}

export { MarkdownButtonTodoList }
