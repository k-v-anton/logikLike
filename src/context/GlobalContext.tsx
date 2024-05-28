import { Dispatch, createContext, useContext, useEffect, useState } from 'react'
import { getUnicTags } from '../components/app/App.Asistent'
import { getFullCourses } from '../services/courses'
import { CourseType, TagType } from '../types/couse.Type'

type GlobalContextType = {
  activeTagIndex: number
  renderCourses: CourseType[]
  unicTagList: TagType[]
  fullCourses: CourseType[]
  setActiveTagIndex: Dispatch<React.SetStateAction<number>>
  setRenderCourses: Dispatch<React.SetStateAction<CourseType[]>>
  setUnicTagList: Dispatch<React.SetStateAction<string[]>>
  setFullCourses: Dispatch<React.SetStateAction<CourseType[]>>
}

const Context = createContext<GlobalContextType>({} as GlobalContextType)

type ProviderPropsType = {
  children: JSX.Element | JSX.Element[]
}

export const CoursesContextProvider = ({ children }: ProviderPropsType) => {
  const context = useCreateCoursesContext()

  return <Context.Provider value={context}>{children}</Context.Provider>
}

export const useCreateCoursesContext = function () {
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
  }, [setFullCourses, setUnicTagList, setRenderCourses])

  return {
    fullCourses,
    renderCourses,
    unicTagList,
    activeTagIndex,
    setFullCourses,
    setRenderCourses,
    setUnicTagList,
    setActiveTagIndex,
  } as GlobalContextType
}

export function useCoursesGlobalContext() {
  const context = useContext(Context)
  if (!context) throw new Error('Use app context within provider!')
  return context
}
