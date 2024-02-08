import { useState } from 'react'

type UseCreateSpeechRecognitionStates = {
  error: string
  speechRecognition: SpeechRecognition
}

const SpeechRecognitionAPI =
  window.SpeechRecognition || window.webkitSpeechRecognition

const speechRecognition = new SpeechRecognitionAPI()

const useCreateSpeechRecognition = (): UseCreateSpeechRecognitionStates => {
  const [error, setError] = useState('')

  const isSpeechRecognitionAPIAvailable =
    'SpeechRecognition' in window || 'webkitSpeechRecognition' in window

  if (!isSpeechRecognitionAPIAvailable) {
    setError(`Your browser doesn't support the recording API`)
  }

  speechRecognition.lang = 'pt-BR' // language
  speechRecognition.continuous = true // stop manually
  speechRecognition.maxAlternatives = 1 // alternative words
  speechRecognition.interimResults = true // stream results

  return {
    error,
    speechRecognition
  }
}

export { useCreateSpeechRecognition }
