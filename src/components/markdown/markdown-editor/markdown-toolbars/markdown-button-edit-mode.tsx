import { commands, type ICommand } from '@uiw/react-md-editor'
import * as Lucide from 'lucide-react'

type MarkdownButtonEditModeProps = ICommand

const MarkdownButtonEditMode: MarkdownButtonEditModeProps = {
  ...commands.codeEdit,
  icon: <Lucide.Pencil className="size-4" />
}

export { MarkdownButtonEditMode }
