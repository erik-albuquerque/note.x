import { formatDate as format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const formatDate = (date: Date) => {
  return format(date, 'EEE, dd MMM yy', { locale: ptBR })
}

export { formatDate }
