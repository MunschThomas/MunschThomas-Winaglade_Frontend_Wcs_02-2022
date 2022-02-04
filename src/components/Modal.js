import { useNavigate, useParams } from 'react-router-dom'
import { useRef } from 'react'
import { Dialog } from '@reach/dialog'
import './../screens/styles/Bet.css'
import '@reach/dialog/styles.css'

const Modal = () => {
  let navigate = useNavigate()
  let { winner } = useParams()
  let buttonRef = useRef(null)

  function onDismiss() {
    navigate(-1)
  }

  return (
    <Dialog
      className='labelWinner'
      aria-labelledby='label'
      onDismiss={onDismiss}
      initialFocusRef={buttonRef}
    >
      <div
        style={{
          display: 'grid',
          justifyContent: 'center',
          padding: '8px 8px',
        }}
      >
        {winner} a gagné !
        <button
          style={{ display: 'block' }}
          ref={buttonRef}
          onClick={onDismiss}
        >
          Fermer
        </button>
      </div>
    </Dialog>
  )
}

export default Modal
