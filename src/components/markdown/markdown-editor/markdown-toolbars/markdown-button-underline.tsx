import {
  TextAreaTextApi,
  type ICommand,
  ExecuteState,
  TextRange,
  getSurroundingWord,
  executeCommand
} from '@uiw/react-md-editor'
import * as Lucide from 'lucide-react'

type MarkdownButtonUnderlineProps = ICommand

function selectWord({
  text,
  selection,
  prefix,
  suffix = prefix
}: {
  text: string
  selection: TextRange
  prefix: string
  suffix?: string
}): TextRange {
  let result = selection
  if (text && text.length && selection.start === selection.end) {
    result = getSurroundingWord(text, selection.start)
  }
  if (
    result.start >= prefix.length &&
    result.end <= text.length - suffix.length
  ) {
    const selectedTextContext = text.slice(
      result.start - prefix.length,
      result.end + suffix.length
    )
    if (
      selectedTextContext.startsWith(prefix) &&
      selectedTextContext.endsWith(suffix)
    ) {
      return {
        start: result.start - prefix.length,
        end: result.end + suffix.length
      }
    }
  }
  return result
}

const MarkdownButtonUnderline: MarkdownButtonUnderlineProps = {
  name: 'underline',
  keyCommand: 'underline',
  buttonProps: {
    'aria-label': 'Add underline text',
    title: 'Add underline text'
  },
  prefix: '<u>',
  suffix: '</u>',
  icon: <Lucide.Underline className="size-4" />,
  execute(state: ExecuteState, api: TextAreaTextApi) {
    const newSelectionRange = selectWord({
      text: state.text,
      selection: state.selection,
      prefix: state.command.prefix!,
      suffix: state.command.suffix!
    })

    const state1 = api.setSelectionRange(newSelectionRange)
    executeCommand({
      api,
      selectedText: state1.selectedText,
      selection: state.selection,
      prefix: state.command.prefix!,
      suffix: state.command.suffix!
    })
  }
}

export { MarkdownButtonUnderline }
