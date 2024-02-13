import {
  Title,
  Description,
  Cancel,
  Action
} from '@radix-ui/react-alert-dialog'

import { AlertContent } from './alert-content'
import { AlertRoot } from './alert-root'
import { AlertTrigger } from './alert-trigger'

const Alert = {
  Root: AlertRoot,
  Trigger: AlertTrigger,
  Content: AlertContent,
  Title,
  Description,
  Cancel,
  Action
}

export { Alert }
