import { Locale, formatDistanceToNow as format } from 'date-fns'

type FormatDistanceToNowProps = {
  date: Date
  locale?: Locale | undefined
}

const formatDistanceToNow = ({
  date,
  locale = undefined
}: FormatDistanceToNowProps) => {
  return format(date, { locale, addSuffix: true })
}

export { formatDistanceToNow }
