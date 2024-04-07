import styles from './Button.module.css'
import { useContext } from 'react'
import { AppContext } from '../../context'

export const ButtonUpdate = () => {
  const { actionFlag, setActionFlag, setIdTask } = useContext(AppContext)

  const handleClick = () => {
    if (actionFlag !== null) {
      setActionFlag(null)
    } else {
      setActionFlag('')
      setIdTask(null)
    }
  }

  return (
    <>
      {actionFlag === null ? (
        <button className={styles.button} onClick={handleClick}>
          Отменить
        </button>
      ) : (
        <button onClick={handleClick} className={styles.button}>
          Изменить
        </button>
      )}
    </>
  )
}
