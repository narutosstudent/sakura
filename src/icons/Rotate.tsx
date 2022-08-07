export const Rotate = (props: { class?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class={`h-8 w-8  fill-gray-200 ${props.class}`}
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M20.485 14 12 22.485 3.515 14 12 5.515 20.485 14ZM6.343 14 12 19.657 17.657 14 12 8.343 6.343 14ZM4.157 4.286A10.983 10.983 0 0 1 12 1c3.972 0 7.575 2.124 9.528 5.5l-1.731 1A8.995 8.995 0 0 0 12 3a8.986 8.986 0 0 0-6.71 3H8v2H2.403l-.4-5.933 1.995-.134.159 2.353Z"
      />
    </svg>
  )
}
