import { format } from 'date-fns'

const formatHours = (date: Date) => {
  return format(date, 'h:mm a')
}

export { formatHours }
