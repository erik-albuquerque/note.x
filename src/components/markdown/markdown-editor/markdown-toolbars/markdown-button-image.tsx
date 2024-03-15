import { commands, type ICommand } from '@uiw/react-md-editor'
import * as Lucide from 'lucide-react'

type MarkdownButtonImageProps = ICommand

const MarkdownButtonImage: MarkdownButtonImageProps = {
  ...commands.image,
  icon: <Lucide.Image className="size-4" />
}

export { MarkdownButtonImage }
