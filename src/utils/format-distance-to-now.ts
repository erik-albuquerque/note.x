import { formatDistanceToNow as format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const formatDistanceToNow = (date: Date) => {
  return format(date, { locale: ptBR, addSuffix: true })
}

export { formatDistanceToNow }
