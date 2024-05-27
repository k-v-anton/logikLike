import { useContext } from 'react'
import { CoursesStateContext } from '../../context/CoursesStateContext'
import { CourseType } from '../../types/couse.Type'
import { CourseCard } from '../CourseCard'
import styles from './Main.module.scss'

export const Main = () => {
  const {renderCourses} = useContext(CoursesStateContext)
  

  return (
    <main className={styles.courses}>
      {renderCourses.map((course: CourseType) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </main>
  )
}
