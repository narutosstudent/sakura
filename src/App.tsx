import { createSignal, Match, Switch } from 'solid-js'

import { Arrow } from './icons/Arrow'
import { Rotate } from './icons/Rotate'

type ValueOf<Type> = Type[keyof Type]

type FileInputEvent = Event & {
  currentTarget: HTMLInputElement
  target: HTMLInputElement
}

export type Direction = 'left' | 'right' | 'bottom' | 'top'

type ObjectPosition =
  | 'object-center'
  | 'object-right'
  | 'object-top'
  | 'object-left'
  | 'object-bottom'

function getImageUrl(event: FileInputEvent) {
  const file = event.target.files ? event.target.files[0] : null
  if (!file) {
    throw new Error('You must upload an image...')
  }

  return window.URL.createObjectURL(file)
}

const negativeRotationValues = {
  zero: 'rotate-0',
  ninthy: '-rotate-90',
  oneEighty: '-rotate-180',
  twoSeventy: '-rotate-[270deg]',
} as const

export const App = () => {
  const [imageUrl, setImageUrl] = createSignal('src/levi.jpg')
  const [imageObjectPosition, setImageObjectPosition] =
    createSignal<ObjectPosition>('object-center')
  const [imageRotation, setImageRotation] = createSignal<
    ValueOf<typeof negativeRotationValues>
  >(negativeRotationValues.zero)

  function onFileChange(event: FileInputEvent) {
    const newImageUrl = getImageUrl(event)
    setImageUrl(newImageUrl)
  }

  function onButtonPositionClick(direction: Direction) {
    if (direction === 'left') {
      if (imageObjectPosition() === 'object-right') {
        setImageObjectPosition('object-center')
        return
      }

      setImageObjectPosition('object-left')
    }

    if (direction === 'right') {
      if (imageObjectPosition() === 'object-left') {
        setImageObjectPosition('object-center')
        return
      }

      setImageObjectPosition('object-right')
    }

    if (direction === 'top') {
      if (imageObjectPosition() === 'object-bottom') {
        setImageObjectPosition('object-center')
        return
      }

      setImageObjectPosition('object-top')
    }

    if (direction === 'bottom') {
      if (imageObjectPosition() === 'object-top') {
        setImageObjectPosition('object-center')
        return
      }

      setImageObjectPosition('object-bottom')
    }
  }

  return (
    <main class="flex h-full w-full flex-col items-center bg-pink-100">
      <h1 class="mt-10 text-8xl font-medium text-gray-800">Sakura</h1>
      <div class="mt-20 flex min-h-[400px] min-w-[700px] flex-col items-center">
        <Switch>
          <Match when={imageUrl()}>
            <div class="flex h-full w-full flex-col items-center">
              <div class="relative h-[300px] w-[600px]">
                <img
                  class={`h-full w-full rounded-md object-cover shadow-sm shadow-gray-800 ${imageObjectPosition()} ${imageRotation()}`}
                  src={imageUrl()}
                  alt=""
                />
                <button
                  type="button"
                  name="left"
                  class="center-vertically postioning-buttons absolute left-2"
                  aria-label="Move Image towards left"
                  onClick={() => onButtonPositionClick('left')}
                >
                  <Arrow direction="left" />
                </button>

                <button
                  type="button"
                  name="top"
                  class="center-horizontally postioning-buttons absolute top-2"
                  aria-label="Move Image towards top"
                  onClick={() => onButtonPositionClick('top')}
                >
                  <Arrow direction="top" />
                </button>

                <button
                  type="button"
                  name="right"
                  class="center-vertically postioning-buttons absolute right-2"
                  aria-label="Move Image towards right"
                  onClick={() => onButtonPositionClick('right')}
                >
                  <Arrow direction="right" />
                </button>

                <button
                  type="button"
                  name="bottom"
                  class="center-horizontally postioning-buttons bottom-2"
                  aria-label="Move Image towards bottom"
                  onClick={() => onButtonPositionClick('bottom')}
                >
                  <Arrow direction="bottom" />
                </button>
              </div>
              <button
                class="mt-auto flex h-10 w-10 items-center justify-center rounded-xl bg-gray-800 shadow-sm shadow-gray-700"
                aria-label="Rotate image towards the left by 90 degrees."
                type="button"
              >
                <Rotate />
              </button>
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
