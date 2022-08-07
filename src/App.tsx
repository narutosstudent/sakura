import type { FileInputEvent, ObjectPosition, ValueOf } from './types'

import { createEffect, createSignal, Match, Switch } from 'solid-js'

import { PositioningButtons } from './components/PositioningButtons'
import { negativeRotationValues } from './constants'
import { Rotate } from './icons/Rotate'
import { getImageUrl } from './utils'

export const App = () => {
  const [imageUrl, setImageUrl] = createSignal('src/levi.jpg')
  const [imageObjectPosition, setImageObjectPosition] =
    createSignal<ObjectPosition>('object-center')
  const [imageRotation, setImageRotation] = createSignal<
    ValueOf<typeof negativeRotationValues>
  >(negativeRotationValues.zero)
  const [contrastValue, setContrastValue] = createSignal(100)

  function onFileChange(event: FileInputEvent) {
    const newImageUrl = getImageUrl(event)
    setImageUrl(newImageUrl)
  }

  function onRotationChange() {
    if (imageRotation() === negativeRotationValues.zero) {
      setImageRotation(negativeRotationValues.ninthy)
      return
    }

    if (imageRotation() === negativeRotationValues.ninthy) {
      setImageRotation(negativeRotationValues.oneEighty)
      return
    }

    if (imageRotation() === negativeRotationValues.oneEighty) {
      setImageRotation(negativeRotationValues.twoSeventy)
      return
    }

    if (imageRotation() === negativeRotationValues.twoSeventy) {
      setImageRotation(negativeRotationValues.zero)
      return
    }
  }

  return (
    <main class="flex h-full w-full flex-col items-center bg-pink-100">
      <h1 class="mt-10 text-8xl font-medium text-gray-800">Sakura</h1>
      <div class="mt-20 flex min-h-[400px] min-w-[700px] flex-col items-center">
        <Switch>
          <Match when={imageUrl()}>
            <div class="flex h-full w-full flex-col items-center">
              <div class="relative h-[300px] w-[600px] overflow-hidden">
                <img
                  class={`h-full w-full rounded-md object-cover shadow-sm shadow-gray-800 contrast-${contrastValue()} ${imageObjectPosition()} ${imageRotation()}`}
                  src={imageUrl()}
                  alt=""
                />
                <PositioningButtons
                  imageObjectPosition={imageObjectPosition}
                  setImageObjectPosition={setImageObjectPosition}
                />
              </div>
              <div class="mt-auto flex w-full items-center justify-evenly">
                <button
                  class="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-800 shadow-sm shadow-gray-700"
                  aria-label="Rotate image towards the left by 90 degrees."
                  type="button"
                  onClick={onRotationChange}
                >
                  <Rotate />
                </button>
                <div class="flex items-center [column-gap:20px]">
                  <label for="contrast">Contrast: </label>
                  <input
                    type="range"
                    id="contrast"
                    min="0"
                    max="200"
                    step="50"
                    value={contrastValue()}
                    onChange={(event) =>
                      setContrastValue(
                        Number((event.target as HTMLInputElement).value)
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </Match>
          <Match when={!imageUrl()}>
            <input
              type="file"
              class="sr-only"
              id="image-upload"
              onChange={onFileChange}
            />
            <label
              for="image-upload"
              class="flex h-full w-full cursor-pointer flex-col items-center rounded-md bg-gray-800 text-center text-[5rem] font-normal text-gray-300"
            >
              <span class="mt-16 underline">Upload Image</span>
            </label>
          </Match>
        </Switch>
      </div>
    </main>
  )
}
