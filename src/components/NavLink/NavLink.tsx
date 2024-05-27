import { useContext } from 'react'
import { CoursesStateContext } from '../../context/CoursesStateContext'
import styles from './NavLink.module.scss'

type NavLinkProps = {
  name: string
  index: number
}

export const NavLink = (props: NavLinkProps) => {
  const { name, index } = props
  const coursesState = useContext(CoursesStateContext)

  return (
    <button
      className={`
        ${styles.navLink} 
        ${coursesState?.activeTagIndex === index ? styles.active : null}
      `}
      data-index={index}
    >
      {name}
    </button>
  )
}

// ${coursesState?.activeTagIndex === index ? styles.active : null}