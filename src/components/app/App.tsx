import { useEffect, useState } from 'react'
import { CoursesStateContext } from '../../context/CoursesStateContext'
import { getFullCourses } from '../../fetches/getFullCourses'
import { CourseType, TagType } from '../../types/couse.Type'
import { Main } from '../Main'
import { Navigate } from '../Navigate'
import { getUnicTags } from './App.Asistent'
import styles from './App.module.scss'

export const App = () => {
  const [fullCourses, setFullCourses] = useState<CourseType[]>([])
  const [renderCourses, setRenderCourses] = useState<CourseType[]>([])
  const [unicTagList, setUnicTagList] = useState<TagType[]>([])
  const [activeTagIndex, setActiveTagIndex] = useState<number>(0)

  useEffect(() => {
    getFullCourses().then((courses) => {
      setFullCourses(courses)
      setUnicTagList(getUnicTags(courses))
      setRenderCourses(courses)
    })
  }, [])

  return (
    <div className={styles.app}>
      <CoursesStateContext.Provider
        value={{
          activeTagIndex,
          setActiveTagIndex,
          renderCourses,
          setRenderCourses,
          unicTagList,
          fullCourses,
        }}
      >
        <Navigate />
        <Main />
      </CoursesStateContext.Provider>
    </div>
  )
}