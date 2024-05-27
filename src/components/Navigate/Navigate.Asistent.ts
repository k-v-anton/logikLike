import { CalcCousoreSizeType } from './Navigate.Types'

export const calcCousoreSize: CalcCousoreSizeType = (containerRef, length) => {
  // if (!containerRef) return { width: 0, height: 0 }

  const foolHeight = containerRef.current?.offsetHeight as number
  const foolWidth = containerRef.current?.offsetWidth as number

  return {
    width: foolWidth - 24,
    height: (foolHeight - 24) / length,
  }
}
