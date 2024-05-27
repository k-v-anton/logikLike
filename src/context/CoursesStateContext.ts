import { Dispatch, createContext } from "react"
import { CourseType, TagType } from "../types/couse.Type"

export type CoursesStateContextType = {
  activeTagIndex: number
  renderCourses: CourseType[]
  unicTagList: TagType[]
  fullCourses: CourseType[]
  setActiveTagIndex: Dispatch<React.SetStateAction<number>>
  setRenderCourses: Dispatch<React.SetStateAction<CourseType[]>>
}

export const CoursesStateContext = createContext<
  CoursesStateContextType >({} as CoursesStateContextType)
