import { memo } from 'react'
import { useCoursesGlobalContext } from '../../context/GlobalContext'
import styles from './NavLink.module.scss'

type NavLinkProps = {
  name: string
  index: number
}

export const NavLink = memo((props: NavLinkProps) => {
  const { name, index } = props
  const { activeTagIndex } = useCoursesGlobalContext()

  return (
    <button
      className={`
        ${styles.navLink} 
        ${activeTagIndex === index ? styles.active : null}
      `}
      style={{ animationDelay: `${index * 0.2}s` }}
      data-index={index}
    >
      {name}
    </button>
  )
})
