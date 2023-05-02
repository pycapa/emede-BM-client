import { useState } from 'react';

const Alert = ({ alertClass, msg, setError }) => {
  /**
  La alerta debe tener 2 colores:
  Rojos : errores
  Verdes : informacion
   */

  const [open, setOpen] = useState(true)

  function closeAlert() {
    setOpen(false)
    setError(false)
  }

  return (
    <>
      {open ?
        <div className={`custom-alert ${alertClass}`}>
          <strong>{msg}</strong>
          <button className='btn btn-alert' onClick={() => closeAlert()}>X</button>
        </div>
        : null}
    </>
  )

}

export default Alert;