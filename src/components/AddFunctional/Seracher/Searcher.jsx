import styles from './Searcher.module.css'
import { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../context'

export const Searcher = () => {
  const { initialInputValue, setInitialInputValue } = useContext(AppContext)
  const [inputText, setInputText] = useState(initialInputValue)

  const onChangeFinder = ({ target }) => {
    if (!target.value) {
      setInitialInputValue(target.value.trim())
    }
    setInputText(target.value.trim())
  }

  const findTasks = (event) => {
    event.preventDefault()
    const sendText = event.target[0].value
    setInitialInputValue(sendText)
  }

  return (
    <form className={styles.search} onSubmit={findTasks}>
      <input
        className={styles.searchString}
        type="text"
        value={inputText}
        placeholder="Поиск задачи по описанию"
        onChange={onChangeFinder}
      />
    </form>
  )
}
