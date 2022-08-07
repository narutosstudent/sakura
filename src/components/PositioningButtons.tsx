import type { Direction, ObjectPosition } from '../types'
import type { Setter } from 'solid-js'

import { Arrow } from '../icons/Arrow'

export function PositioningButtons({
  imageObjectPosition,
  setImageObjectPosition,
}: {
  imageObjectPosition: ObjectPosition
  setImageObjectPosition: Setter<ObjectPosition>
}) {
  function handleImageRotation(direction: Direction) {
    if (direction === 'left') {
      if (imageObjectPosition === 'object-right') {
        setImageObjectPosition('object-center')
        return
      }

      setImageObjectPosition('object-left')
    }

    if (direction === 'right') {
      if (imageObjectPosition === 'object-left') {
        setImageObjectPosition('object-center')
        return
      }

      setImageObjectPosition('object-right')
    }

    if (direction === 'top') {
      if (imageObjectPosition === 'object-bottom') {
        setImageObjectPosition('object-center')
        return
      }

      setImageObjectPosition('object-top')
    }

    if (direction === 'bottom') {
      if (imageObjectPosition === 'object-top') {
        setImageObjectPosition('object-center')
        return
      }

      setImageObjectPosition('object-bottom')
    }
  }

  return (
    <>
      <button
        type="button"
        name="left"
        class="center-vertically postioning-buttons absolute left-2"
        aria-label="Move Image towards left"
        onClick={() => handleImageRotation('left')}
      >
        <Arrow direction="left" />
      </button>

      <button
        type="button"
        name="top"
        class="center-horizontally postioning-buttons absolute top-2"
        aria-label="Move Image towards top"
        onClick={() => handleImageRotation('top')}
      >
        <Arrow direction="top" />
      </button>

      <button
        type="button"
        name="right"
        class="center-vertically postioning-buttons absolute right-2"
        aria-label="Move Image towards right"
        onClick={() => handleImageRotation('right')}
      >
        <Arrow direction="right" />
      </button>

      <button
        type="button"
        name="bottom"
        class="center-horizontally postioning-buttons bottom-2"
        aria-label="Move Image towards bottom"
        onClick={() => handleImageRotation('bottom')}
      >
        <Arrow direction="bottom" />
      </button>
    </>
  )
}
