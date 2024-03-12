import { Locale, differenceInDays } from 'date-fns'

import { formatDate } from './format-date'
import { formatDistanceToNow } from './format-distance-to-now'
import { formatHours } from './format-hours'

type FormatDisplayDateProps = {
  date: Date
  locale?: Locale | undefined
}

const formatDisplayDate = ({
  date,
  locale = undefined
}: FormatDisplayDateProps): string => {
  const distanceToNow = formatDistanceToNow({
    date,
    locale
  })

  const countDifferenceInDays = differenceInDays(new Date(), date)

  if (countDifferenceInDays > 2) {
    return `${formatDate({ date, locale })} • ${formatHours({ date, locale })}`
  }

  return distanceToNow
}

export { formatDisplayDate }
