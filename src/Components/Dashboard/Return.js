import { useNavigate } from 'react-router-dom'
const Return = () => {
  const navigate = useNavigate();

  return (
    <>
      <button className='btn ms-3 btn-option'
        onClick={() => navigate(-1)}><i className="bi bi-skip-backward"></i></button >
    </>)
}

export default Return;