import { useNavigate } from 'react-router-dom'
const Logout = () => {
  const navigate = useNavigate();

  function logout() {
    document.cookie = `token=;expires=${new Date(0)}; path=/; samesite=strict`;
    document.cookie = `admin=;expires=${new Date(0)}; path=/; samesite=strict`;
    document.cookie = `userName=;expires=${new Date(0)}; path=/; samesite=strict`;
    navigate('/')
  }

  return (
    <>
      <button className='btn ms-3 btn-option'
        onClick={() => logout()}><i className="bi bi-box-arrow-right"></i></button >
    </>)
}

export default Logout;