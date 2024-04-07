import styles from './Button.module.css'
import { useContext } from 'react'
import { AppContext } from '../../context'

export const ButtonDelete = () => {
  const { actionFlag, setActionFlag } = useContext(AppContext)
  const handleClick = () => {
    if (actionFlag !== false) {
      setActionFlag(false)
    } else {
      setActionFlag('')
    }
  }

  return (
    <>
      {actionFlag === false ? (
        <button className={styles.button} onClick={handleClick}>
          Отменить
        </button>
      ) : (
        <button onClick={handleClick} className={styles.button}>
          Удалить
        </button>
      )}
    </>
  )
}
