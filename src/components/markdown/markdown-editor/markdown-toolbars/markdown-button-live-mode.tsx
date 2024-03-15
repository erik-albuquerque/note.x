import { commands, type ICommand } from '@uiw/react-md-editor'
import * as Lucide from 'lucide-react'

type MarkdownButtonLiveModeProps = ICommand

const MarkdownButtonLiveMode: MarkdownButtonLiveModeProps = {
  ...commands.codeLive,
  icon: <Lucide.SplitSquareHorizontal className="size-[18px]" />
}

export { MarkdownButtonLiveMode }
