import { useContext } from 'react'
import { AppContext } from '../context'
import { searchTasks } from './hooks/search-tasks'
import styles from './Task.module.css'
import { URL, PATH } from '../Constants/URL-constatns'

export const Tasks = () => {
  const {
    tasks,
    initialInputValue,
    sortOn,
    actionFlag,
    setActionFlag,
    refreshTasks,
    setIdTask,
  } = useContext(AppContext)
  let newTasks = [...tasks]

  if (sortOn) {
    newTasks.sort((a, b) => a.title.localeCompare(b.title))
  }

  if (initialInputValue) {
    newTasks = searchTasks(newTasks, initialInputValue)
  }

  const handleClick = (id) => {
    if (actionFlag === false) {
      fetch(`${URL}/${PATH}/${id}`, {
        method: 'DELETE',
      }).then(() => {
        refreshTasks()
        setActionFlag('')
      })
    }

    setIdTask(id)
  }

  return (
    <>
      <div className={styles.flexDiv}>
        {newTasks.length > 0 ? (
          newTasks.map(({ id, title, description }) => {
            return (
              <div key={id} className={styles.note} onClick={() => handleClick(id)}>
                <div> {title} </div>
                <div> {description} </div>
              </div>
            )
          })
        ) : (
          <div> Похоже, что таких задач еще нет. Самое время добавить их</div>
        )}
      </div>
    </>
  )
}
