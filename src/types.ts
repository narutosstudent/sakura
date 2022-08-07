export type FileInputEvent = Event & {
  currentTarget: HTMLInputElement
  target: HTMLInputElement
}

export type ValueOf<Type> = Type[keyof Type]

export type Direction = 'left' | 'right' | 'bottom' | 'top'

export type ObjectPosition =
  | 'object-center'
  | 'object-right'
  | 'object-top'
  | 'object-left'
  | 'object-bottom'
