import { memo } from 'react'
import styles from './Coursore.module.scss'

type CoursorePropsType = {
  width: number
  height: number
  transition: number
}

export const Coursore = memo((props: CoursorePropsType) => {
  const { width, height, transition } = props

  return (
    <div
      className={styles.coursore}
      style={{
        transform: `translate(0, ${transition}px)`,
        height: `${height}px`,
        width: `${width}px`,
      }}
    ></div>
  )
})
