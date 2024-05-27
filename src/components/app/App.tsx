import { Main } from '../Main'
import { Navigate } from '../Navigate'
import styles from './App.module.scss'

export const App = () => {

  return (
    <div className={styles.app}>
      <Navigate />
      <Main />
    </div>
  )
}
