import styles from './Button.module.css'
import { useContext } from 'react'
import { AppContext } from '../../context'

export const ButtonAdd = () => {
  const { actionFlag, setActionFlag } = useContext(AppContext)

  const handleClick = () => {
    if (actionFlag !== true) {
      setActionFlag(true)
    } else {
      setActionFlag('')
    }
  }
  return (
    <>
      {actionFlag === true ? (
        <button className={styles.button} onClick={handleClick}>
          Отменить
        </button>
      ) : (
        <button className={styles.button} onClick={handleClick}>
          Добавить
        </button>
      )}
    </>
  )
}
