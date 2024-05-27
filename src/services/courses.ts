import { CourseType } from '../types/couse.Type'

type GetFullCoursesType = () => Promise<CourseType[]>

export const getFullCourses: GetFullCoursesType = async () => {
  const url = 'https://logiclike.com/docs/courses.json'

  const data = await fetch(url)

  return await data.json()
}
