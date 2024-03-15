import { commands } from '@uiw/react-md-editor'

import { MarkdownButtonBold } from './markdown-button-bold'
import { MarkdownButtonCode } from './markdown-button-code'
import { MarkdownButtonCodeBlock } from './markdown-button-code-block'
import { MarkdownButtonEditMode } from './markdown-button-edit-mode'
import { MarkdownButtonFullscreenMode } from './markdown-button-fullscreen-mode'
import { MarkdownButtonHeader } from './markdown-button-header'
import { MarkdownButtonImage } from './markdown-button-image'
import { MarkdownButtonItalic } from './markdown-button-italic'
import { MarkdownButtonLink } from './markdown-button-link'
import { MarkdownButtonLiveMode } from './markdown-button-live-mode'
import { MarkdownButtonOrderedList } from './markdown-button-ordered-list'
import { MarkdownButtonPreview } from './markdown-button-preview'
import { MarkdownButtonQuote } from './markdown-button-quote'
import { MarkdownButtonStrikethrough } from './markdown-button-strikethrough'
import { MarkdownButtonTodoList } from './markdown-button-todo-list'
import { MarkdownButtonUnderline } from './markdown-button-underline'
import { MarkdownButtonUnorderedList } from './markdown-button-unordered-list'

const markdownToolbars = [
  MarkdownButtonBold,
  MarkdownButtonItalic,
  MarkdownButtonHeader,
  MarkdownButtonStrikethrough,
  MarkdownButtonUnderline,
  MarkdownButtonQuote,
  commands.divider,
  MarkdownButtonOrderedList,
  MarkdownButtonUnorderedList,
  MarkdownButtonTodoList,
  commands.divider,
  MarkdownButtonLink,
  MarkdownButtonImage,
  MarkdownButtonCode,
  MarkdownButtonCodeBlock,
  commands.divider,
  MarkdownButtonEditMode,
  MarkdownButtonLiveMode,
  MarkdownButtonPreview,
  MarkdownButtonFullscreenMode
]

export { markdownToolbars }
