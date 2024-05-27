import { MouseEvent, memo, useContext, useEffect, useRef, useState } from 'react'
import { CoursesStateContext } from '../../context/CoursesStateContext'
import { NavLink } from '../NavLink'
import { filterCoursesByActiveTag } from '../app/App.Asistent'
import styles from './Navigate.module.scss'

type HandleClickFilterType = (e: MouseEvent<HTMLButtonElement>) => void

export const Navigate = memo(() => {
  const { unicTagList, setActiveTagIndex, setRenderCourses, fullCourses, activeTagIndex } =
    useContext(CoursesStateContext)

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
  
  const navigationRef = useRef<HTMLDivElement | null>(null)
  const [transitionY, setTransitionY] = useState<number>(0)

  type SizeType ={
    width: number
    height: number
  }
  const [size, setSize] = useState<SizeType>({
    width: 0,
    height: 0
  })

  useEffect(() => {
    if (navigationRef && navigationRef.current) {
      const foolHeight = navigationRef.current.offsetHeight
      const foolWidth = navigationRef.current.offsetWidth
      const newSizeButton = {
        width: (foolWidth - 24),
        height: (foolHeight - 24) / (unicTagList.length)
      }
       
       setTransitionY(newSizeButton.height * activeTagIndex)
       setSize(newSizeButton)
    }
    
   
    
    
  }, [activeTagIndex, unicTagList])

  return (
    <nav  className={styles.navigate} onClick={handleClickFilters}>
      <div className={styles.container} ref={navigationRef}>
        {unicTagList.map((filter: string, index: number) => (
          <NavLink key={filter} name={filter} index={index} />
        ))}
        <div className={styles.coursore} style={{
        transform: `translate(0, ${transitionY}px)`,
        height: `${size.height}px`,
        width: `${size.width}px`,
      }}></div>
      </div>

      
    </nav>
  )
})
