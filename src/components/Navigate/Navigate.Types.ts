import { MouseEvent } from 'react'

export type SizeButtonType = {
  width: number
  height: number
}

export type HandleClickFilterType = (e: MouseEvent<HTMLButtonElement>) => void

export type CalcCousoreSizeType = (
  containerRef: React.MutableRefObject<HTMLDivElement | null>,
  length: number
) => SizeButtonType
