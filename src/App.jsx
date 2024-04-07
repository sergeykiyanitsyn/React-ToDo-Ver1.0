import { useEffect, useState } from 'react'
import styles from './App.module.css'
import { AddFunctional, Form, Tasks, Loader, Buttons, Message } from './components'
import { AppContext } from './components/context'
import { URL, PATH } from './components/Constants/URL-constatns'

//actionFlags: add - true, delete - false, update - null

const App = () => {
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [actionFlag, setActionFlag] = useState('')
  const [initialInputValue, setInitialInputValue] = useState('')
  const [sortOn, setSortOn] = useState(false)
  const [idTask, setIdTask] = useState(null)

  const refreshTasks = () => {
    setIsLoading(true)

    fetch(`${URL}/${PATH}`)
      .then((loadedData) => loadedData.json())
      .then((serverTasks) => {
        setTasks(serverTasks)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    setIsLoading(true)

    fetch(`${URL}/${PATH}`)
      .then((loadedData) => loadedData.json())
      .then((serverTasks) => setTasks(serverTasks))
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      <AppContext.Provider
        value={{
          actionFlag,
          setActionFlag,
          idTask,
          setIdTask,
          refreshTasks,
          initialInputValue,
          setInitialInputValue,
          sortOn,
          setSortOn,
          tasks,
        }}
      >
        <div className={styles.wrapper}>
          <div className={styles.taskHeaders}> Лист задач </div>
          <Buttons />
          <Form actionFlag={actionFlag} idTask={idTask} />
          <Message actionFlag={actionFlag} id={idTask} />
          <AddFunctional />
          {isLoading ? <Loader /> : <Tasks />}
        </div>
      </AppContext.Provider>
    </>
  )
}

export default App
