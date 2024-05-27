import { CourseType, TagType } from "../../types/couse.Type"

export type GenerateFiltersArrayType = (courses: CourseType[]) => string[]

export type FilterCoursesByActiveTagType = (
  activeIndex: number,
  fullList: CourseType[],
  tags: TagType[]
) => CourseType[]