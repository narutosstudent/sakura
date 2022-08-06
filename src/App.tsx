import { createSignal, Match, Switch } from 'solid-js'

export const App = () => {
  const [imageUrl, setImageUrl] = createSignal('')

  return (
    <main class="flex h-full w-full flex-col items-center bg-pink-100">
      <h1 class="mt-10 text-8xl font-medium text-gray-800">Sakura</h1>
      <div class="mt-20 flex h-[300px] w-[600px] flex-col items-center">
        <Switch>
          <Match when={imageUrl()}>
            <img
              class="h-full w-full object-cover object-center"
              src={imageUrl()}
              alt=""
            />
          </Match>
          <Match when={!imageUrl()}>
            <input type="file" class="sr-only" id="image-upload" />
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
