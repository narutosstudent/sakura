import type { FileInputEvent } from './types'

export function getImageUrl(event: FileInputEvent) {
  const file = event.target.files ? event.target.files?.[0] : null
  if (!file) {
    throw new Error('You must upload an image...')
  }

  return window.URL.createObjectURL(file)
}
