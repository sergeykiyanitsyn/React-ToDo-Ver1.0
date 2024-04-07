import styles from './Sorting.module.css'
import { useContext } from 'react'
import { AppContext } from '../../context'

export const Sorting = () => {
  const { sortOn, setSortOn } = useContext(AppContext)
  const onClickSort = () => setSortOn(!sortOn)

  return (
    <div className={styles.sorting}>
      <label htmlFor="sort">
        Сортировка по алфавиту
        <button
          className={styles.sortingButton}
          id="sort"
          type="click"
          onClick={onClickSort}
        >
          {sortOn ? 'On' : 'Off'}
        </button>
      </label>
    </div>
  )
}
