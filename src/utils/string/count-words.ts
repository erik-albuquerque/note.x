const countWords = (text: string) => {
  const wordsArray = text.split(/\s+/)

  const nonEmptyWordsArray = wordsArray.filter((word) => word.trim() !== '')

  return nonEmptyWordsArray.length
}

export { countWords }
