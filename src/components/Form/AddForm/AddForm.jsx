import { useState, useContext } from 'react'
import { AppContext } from '../../context'
import styles from './Form.module.css'
import { URL, PATH } from '../../Constants/URL-constatns'

export const AddForm = () => {
  const { setActionFlag, refreshTasks } = useContext(AppContext)
  const [title, setValueTitle] = useState('')
  const [description, setValueDescription] = useState('')

  const onChangeTitle = ({ target }) => {
    setValueTitle(target.value.trim())
  }

  const onChangeDescription = ({ target }) => {
    setValueDescription(target.value.trim())
  }

  const onSubmit = (event) => {
    event.preventDefault()

    if (title && description) {
      fetch(`${URL}/${PATH}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
          title: `${title}`,
          description: `${description}`,
        }),
      })
        .then(() => refreshTasks())
        .finally(() => {
          setActionFlag('')
        })
    } else {
      setActionFlag('')
    }

    setValueTitle('')
    setValueDescription('')
  }

  return (
    <form className={styles.formNewTasks} onSubmit={onSubmit}>
      <input
        className={styles.formNewTasksName}
        type="text"
        placeholder="Введите название задачи"
        onChange={onChangeTitle}
      />
      <input
        className={styles.formNewTasksDesc}
        type="text"
        placeholder="Введите описание задачи"
        onChange={onChangeDescription}
      />
      <button className={styles.formNewTasksButton} type="submit">
        сохранить
      </button>
    </form>
  )
}
