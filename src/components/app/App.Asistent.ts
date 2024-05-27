import { CourseType } from '../../types/couse.Type'
import {
  FilterCoursesByActiveTagType,
  GenerateFiltersArrayType,
} from './App.Types'

export const getUnicTags: GenerateFiltersArrayType = (courses) => {
  const allTags = courses.map((course) => course.tags).flat() as string[]
  const uniqTags = [...new Set(allTags)]

  return ['Все курсы', ...uniqTags]
}

export const filterCoursesByActiveTag: FilterCoursesByActiveTagType = (
  activeIndex,
  fullList,
  unicTagList
) => {
  return activeIndex
    ? fullList.filter((course: CourseType) =>
        course.tags.includes(unicTagList[activeIndex])
      )
    : [...fullList]
}
