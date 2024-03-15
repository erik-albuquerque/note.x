import { commands, type ICommand } from '@uiw/react-md-editor'
import * as Lucide from 'lucide-react'

type MarkdownButtonCodeProps = ICommand

const MarkdownButtonCode: MarkdownButtonCodeProps = {
  ...commands.code,
  icon: <Lucide.Code className="size-4" />
}

export { MarkdownButtonCode }
