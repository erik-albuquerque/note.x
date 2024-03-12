import { v4 as uuid_v4 } from 'uuid'

const generateUuid = () => {
  return uuid_v4()
}

export { generateUuid }
