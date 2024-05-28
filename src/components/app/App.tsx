import { useCoursesGlobalContext } from '../../context/GlobalContext'
import { Main } from '../Main'
import { Navigate } from '../Navigate'
import styles from './App.module.scss'

export const App = () => {
  const { renderCourses, unicTagList } = useCoursesGlobalContext()

  return (
    <div className={styles.app}>
      {unicTagList.length && <Navigate />}
      {renderCourses.length && <Main />}
    </div>
  )
}
