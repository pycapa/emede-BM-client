import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Footer } from '../Footer/Footer.js';
import Alert from '../Error/Error.js';
import Logout from './Logout.js';

import urls from '../../assets/urls.json'
import { formatDate, getPrivilegesSession } from '../../assets/js/utils.js';


const Dashboard = (props) => {

  // propiedades que recibe Dashboard
  // Actualizar variable que indica si esta creando un nuevo proyecto o lo estaria editando.
  const { setNewProject } = props;



  useEffect(() => {
    fetchProjects();


  },
    //eslint-disable-next-line 
    [])

  const token = getPrivilegesSession().token
  const admin = getPrivilegesSession().admin
  const navigate = useNavigate()

  const [projects, setProjects] = useState([])
  const [errorMsg, setErrorMsg] = useState([])
  const [error, setError] = useState(false)


  // retrieving all projects;

  function fetchProjects() {
    const url = `${urls.expressServer}/projects`

    fetch(url, {
      headers: { 'X-Access-Token': token }
    }).then(res => res.json())
      .then(data => {
        if (data.status === "error") throw new Error(data.msg)
        setProjects(data.result)
      })
      .catch(err => {
        setErrorMsg(err.message)
        setError(true)
      })
  }


  function handleNewProject(editing) {
    setNewProject(editing)
    if (admin) navigate('/project')
    else {
      setErrorMsg("You don't have privilges to create Projects")
      setError(true)
    }

  }

  return (
    <div className='d-flex flex-column'>
      {/* Barra de herramientas */}
      <div className='d-flex align-items-center p-2 m-0 justify-content-between'
        style={{ borderBottom: '1px solid var(--title-color)' }}>

        <div>
          <button className='btn btn-submit'><i className="bi bi-arrow-repeat me-2"></i>Apply Filter</button>
          <button className='btn ms-3'><i className="bi bi-arrow-counterclockwise me-2"></i>Reset Filter</button>
        </div>

        {/* div para mostrar errores */}
        {error ?
          <div className='showError'>
            <Alert
              alertClass={'custom-alert-danger'}
              msg={errorMsg}
              setError={setError}
            />
          </div>
          : null}

        <div>
          <i className="bi bi-arrow-down-up me-2"></i>
          <strong>Sort By: </strong>
          <select>
            <option> Project Code</option>
            <option> Name</option>
            <option> Client</option>
            <option> P.O.</option>
            <option> Product</option>
            <option> Status</option>
          </select>
          <button className='btn ms-3 btn-option'
            onClick={() => { handleNewProject(true) }}><i className="bi bi-file-earmark-plus me-2"></i>New Project</button>
          <Logout />
        </div>
      </div>


      <div className='d-flex flex-row background main' >
        {/* Filters div */}

        < div className='p-2 col-4'>
          <label className='form-label' ><strong>Filter projects by client, name or product type</strong></label>
          <input className='form-control' type='search' placeholder='Client/ Project Name / Project Code or Product Type'></input>

        </div>

        {/* Data div */}

        <div className='p-2 col-8 table-container table-container-max' style={{ borderLeft: '1px solid var(--title-color)' }}>

          <ul className='m-0 p-0'>

            {projects.map((project, index) => (

              <li id={project.projectId} key={project.projectId}>
                <div className='d-flex flex-row  p-2 container-fluid mb-2' style={{
                  backgroundColor: 'var(--background-color',
                  border: '1px solid var(--btn-option)',
                  borderRadius: '1rem',
                  cursor: 'pointer!important'

                }}>
                  {/* Detalle de datos */}
                  <div className='col-4'>
                    <div>
                      <label>Project Code: </label>
                      <label className='label-data'>{project.project}</label>
                    </div>
                    <div>
                      <label>Name:</label>
                      <label className='label-data'>{project.name}</label>
                    </div>
                    <div>
                      <label>Status:</label>
                      <label className='label-data'>{project.statusDescription}</label>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div>
                      <label>Client:</label>
                      <label className='label-data'>{project.clientName}</label>
                    </div>
                    <div>
                      <label>Product:</label>
                      <label className='label-data'>{project.productDescription}</label>
                    </div>                </div>
                  <div className='col-4'>
                    <div>
                      <label>Promise Date: </label>
                      <label className='label-data'>{project.dueDate && formatDate(project.dueDate, false)}</label>
                    </div>
                    <div>
                      <label>Start Date:</label>
                      <label className='label-data'>{project.startDate && formatDate(project.startDate, false)}</label>
                    </div>
                    <div>
                      <label>Finish Date:</label>
                      <label className='label-data'>{project.finishDate && formatDate(project.finishDate, false)}</label>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div >
  )

}

export default Dashboard