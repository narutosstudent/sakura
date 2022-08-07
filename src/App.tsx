import { createSignal, Match, Switch } from 'solid-js'

import { Arrow } from './icons/Arrow'

type FileInputEvent = Event & {
  currentTarget: HTMLInputElement
  target: HTMLInputElement
}

export const App = () => {
  const [imageUrl, setImageUrl] = createSignal('src/levi.jpg')

  const onFileChange = (event: FileInputEvent) => {
    const file = event.target.files ? event.target.files[0] : null
    if (!file) {
      throw new Error('You must upload a image...')
    }

    const newImageUrl = window.URL.createObjectURL(file)
    setImageUrl(newImageUrl)
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
                  class="h-full w-full rounded-md object-cover object-center shadow-sm shadow-gray-800"
                  src={imageUrl()}
                  alt=""
                />
                <button
                  type="button"
                  name="left"
                  class="center-vertically postioning-buttons absolute left-2"
                >
                  <Arrow direction="left" />
                </button>
                <button
                  type="button"
                  name="top"
                  class="center-horizontally postioning-buttons absolute top-2"
                >
                  <Arrow direction="top" />
                </button>
                <button
                  type="button"
                  name="right"
                  class="center-vertically postioning-buttons absolute right-2"
                >
                  <Arrow direction="right" />
                </button>
                <button
                  type="button"
                  name="bottom"
                  class="center-horizontally postioning-buttons bottom-2"
                >
                  <Arrow direction="bottom" />
                </button>
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
