import { Locale, formatDate as format } from 'date-fns'

type FormatDateProps = {
  date: Date
  locale?: Locale | undefined
}

const formatDate = ({ date, locale = undefined }: FormatDateProps) => {
  return format(date, 'EEE, dd MMM yyyy', {
    locale
  })
}

export { formatDate }
