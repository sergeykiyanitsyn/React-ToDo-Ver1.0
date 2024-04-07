import { UpdForm } from './UpdForm/UpdForm'
import { AddForm } from './AddForm/AddForm'
import PropTypes from 'prop-types'

export const Form = ({ actionFlag, idTask }) => (
  <>
    {actionFlag === true && <AddForm />}
    {actionFlag === null && idTask !== null && <UpdForm />}
  </>
)

Form.propTypes = {
  actionFlag: PropTypes.any,
  idTask: PropTypes.any,
}
