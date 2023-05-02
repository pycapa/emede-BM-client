
import utils from '../../assets/js/utils.js';


export const Footer = () => {
  const user = utils.getPrivilegesSession()


  return (
    <div className='d-flex justify-content-between m-0 p-2' style={
      { backgroundColor: "var(--btn-option)", color: 'white' }}>
      <p><strong>EMEDE-ELECTRIC</strong> </p>
      <p ><strong>You are logged as : {user.userName && user.userName.toUpperCase()}</strong></p>
    </div >

  )

}