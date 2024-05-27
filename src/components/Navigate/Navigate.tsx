import { memo, useEffect, useRef, useState } from 'react'
import { useCoursesContext } from '../../hooks/useCoursesContext'
import { Coursore } from '../Coursore'
import { NavLink } from '../NavLink'
import { filterCoursesByActiveTag } from '../app/App.Asistent'
import { calcCousoreSize } from './Navigate.Asistent'
import { HandleClickFilterType, SizeButtonType } from './Navigate.Types'
import styles from './Navigate.module.scss'

export const Navigate = memo(() => {
  const [coursoreTransition, setCoursoreTransition] = useState<number>(0)
  const [corsoreSize, setCoursoreSize] = useState<SizeButtonType>({
    width: 0,
    height: 0,
  })

  const navigationRef = useRef<HTMLDivElement | null>(null)

  const {
    unicTagList,
    setActiveTagIndex,
    setRenderCourses,
    fullCourses,
    activeTagIndex,
  } = useCoursesContext()

  const handleClickFilters: HandleClickFilterType = (e) => {
    if (!(e.target instanceof HTMLButtonElement)) return

    if (e.target && e.target.dataset && e.target.dataset.index) {
      setActiveTagIndex(+e.target.dataset.index)
      setRenderCourses(
        filterCoursesByActiveTag(
          +e.target.dataset.index,
          fullCourses,
          unicTagList
        )
      )
    }
  }

  useEffect(() => {
    const newSizeButton = calcCousoreSize(navigationRef, unicTagList.length)

    setCoursoreSize(newSizeButton)
  }, [unicTagList.length, navigationRef])

  useEffect(() => {
    setCoursoreTransition(corsoreSize.height * activeTagIndex)
  }, [activeTagIndex, corsoreSize])

  return (
    <nav className={styles.navigate} onClick={handleClickFilters}>
      <div className={styles.container} ref={navigationRef}>
        {unicTagList.map((filter: string, index: number) => (
          <NavLink key={filter} name={filter} index={index} />
        ))}

        <Coursore
          width={corsoreSize.width}
          height={corsoreSize.height}
          transition={coursoreTransition}
        />
      </div>
    </nav>
  )
})
