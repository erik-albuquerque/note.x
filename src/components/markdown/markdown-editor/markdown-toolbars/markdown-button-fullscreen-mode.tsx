import { commands, type ICommand } from '@uiw/react-md-editor'
import * as Lucide from 'lucide-react'

type MarkdownButtonFullscreenModeProps = ICommand

const MarkdownButtonFullscreenMode: MarkdownButtonFullscreenModeProps = {
  ...commands.fullscreen,
  icon: <Lucide.Fullscreen className="size-[18px]" />
}

export { MarkdownButtonFullscreenMode }
