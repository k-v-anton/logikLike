import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/app'
import { CoursesContextProvider } from './context/GlobalContext'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CoursesContextProvider>
      <App />
    </CoursesContextProvider>
  </React.StrictMode>
)
