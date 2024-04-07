import { ButtonAdd } from './ButtonAdd/ButtonAdd'
import { ButtonUpdate } from './ButtonUpdate/ButtonUpdate'
import { ButtonDelete } from './ButtonDelete/ButtonDelete'
import styles from './Button.module.css'

export const Buttons = () => (
  <div className={styles.flexButtons}>
    <ButtonAdd />
    <ButtonUpdate />
    <ButtonDelete />
  </div>
)
