import { CourseType } from '../../types/couse.Type'
import styles from './CourseCard.module.scss'

export const CourseCard = (props: CourseType) => {
  const { image, bgColor, name } = props

  return (
    <div className={styles.courseCard}>
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
}
