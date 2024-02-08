import { useState } from 'react'

import { useCreateSpeechRecognition } from './use-create-speech-recognition'

type UseSpeechRecognitionProps = {
  error: string
  speechText: string
  isRecording: boolean
  speechRecognition: SpeechRecognition
  startRecording: () => void
  stopRecording: () => void
}

const useSpeechRecognition = (): UseSpeechRecognitionProps => {
  const { speechRecognition, error: errorOnCreateSpeechRecognition } =
    useCreateSpeechRecognition()

  const [error, setError] = useState('')
  const [speechText, setSpeechText] = useState('')
  const [isRecording, setIsRecording] = useState(false)

  const startRecording = () => {
    speechRecognition.start()
    setIsRecording(true)
  }

  const stopRecording = () => {
    speechRecognition.stop()
    setIsRecording(false)
  }

  speechRecognition.onresult = (event) => {
    const transcription = Array.from(event.results).reduce((text, result) => {
      return text.concat(result[0].transcript)
    }, '')

    setSpeechText(transcription)
  }

  speechRecognition.onerror = (event) => {
    setError(event.error.toString())
    console.error(event)
  }

  return {
    error: error || errorOnCreateSpeechRecognition,
    speechText,
    isRecording,
    speechRecognition,
    startRecording,
    stopRecording
  }
}

export { useSpeechRecognition }
