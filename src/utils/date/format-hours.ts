import { Locale, format } from 'date-fns'

type FormatHoursProps = {
  date: Date
  locale?: Locale | undefined
}

const formatHours = ({ date, locale = undefined }: FormatHoursProps) => {
  return format(date, 'h:mm a', { locale })
}

export { formatHours }
