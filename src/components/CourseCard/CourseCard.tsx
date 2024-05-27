import { memo } from 'react'
import { CourseType } from '../../types/couse.Type'
import styles from './CourseCard.module.scss'

export const CourseCard = memo((props: { index: number } & CourseType) => {
  const { image, bgColor, name, index } = props

  return (
    <div
      className={styles.courseCard}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div
        className={styles.image_container}
        style={{ backgroundColor: bgColor }}
      >
        <img className={styles.course_image} src={image} alt='' />
      </div>
      <div className={styles.name_container}>
        <p className={styles.course_name}>{name}</p>
      </div>
    </div>
  )
})
