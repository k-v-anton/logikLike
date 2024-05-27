import { useCoursesGlobalContext } from '../../context/GlobalContext'
import { CourseType } from '../../types/couse.Type'
import { CourseCard } from '../CourseCard'
import styles from './Main.module.scss'

export const Main = () => {
  const { renderCourses } = useCoursesGlobalContext()

  return (
    <main className={`${styles.courses} `}>
      {renderCourses.map((course: CourseType, index: number) => (
        <CourseCard key={course.id} index={index} {...course} />
      ))}
    </main>
  )
}
