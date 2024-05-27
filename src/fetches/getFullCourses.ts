import { CourseType } from '../types/couse.Type'

type GetFullCoursesType = () => Promise<CourseType[]>

export const getFullCourses: GetFullCoursesType = async () => {
  const url = 'https://logiclike.com/docs/courses.json'
  const params = { methode: 'GET' } as RequestInit

  const request = new Request(url, params)
  const data = await (await fetch(request)).json()

  return await data
}
