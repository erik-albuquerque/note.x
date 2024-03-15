import { commands, type ICommand } from '@uiw/react-md-editor'
import * as Lucide from 'lucide-react'

type MarkdownButtonPreviewProps = ICommand

const MarkdownButtonPreview: MarkdownButtonPreviewProps = {
  ...commands.codePreview,
  icon: <Lucide.ScanEye className="size-[18px]" />
}

export { MarkdownButtonPreview }
