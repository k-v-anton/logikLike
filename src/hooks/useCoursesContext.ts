import { useContext } from 'react'
import { CoursesStateContext } from '../context/CoursesStateContext'

export const useCoursesContext = () => {
  const context = useContext(CoursesStateContext)

  return context
}
