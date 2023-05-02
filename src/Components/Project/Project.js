import React, { useReducer, useState } from 'react';

import Alert from '../Error/Error';
import Logout from '../Dashboard/Logout';
import Return from '../Dashboard/Return';

const Project = (props) => {

  const {
    newProject,
    setNewProject } = props


  const [errorMsg, setErrorMsg] = useState([])
  const [error, setError] = useState(false)

  // campos de la base de datos
  const [projectId, setProjectId] = useState('New')
  const [statusId, setStatusId] = useState('')
  const [progress, setProgress] = useState(0)
  const [project, setProject] = useState('')
  const [projectName, setProjectName] = useState('')
  const [clientId, setClientId] = useState('')
  const [title, setTitle] = useState('')
  const [po, setPo] = useState('')
  const [cc, setCc] = useState('')
  const [productId, setProductId] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [startDate, setStartDate] = useState('')
  const [finishDate, setFinishDate] = useState('')

  /**
   * 
  1. Si el proyecto es nuevo se limpian los inputs.
  2. Al salvar se debe confirmar el proceso.
  
   */

  // 1. New project.

  function addProject() {
    setNewProject(true)
    setProjectId('New')
    setStatusId(0)
    setProgress(0)
    setProject('')
    setProjectName('')
    setClientId(0)
    setTitle('')
    setPo('')
    setCc('')
    setProductId(0)
    setDueDate('')
    setStartDate('')
    setFinishDate('')

  }


  // salvar el proyecto
  function saveProject() {
    setNewProject(false)
  }



  return (

    <div className='d-flex flex-column'>
      <div className='d-flex align-items-center p-2 m-0 justify-content-between'>
        <div>

          {/* Si viene la llamada desde el dashboard para un nuevo proyecto, oculto el boton. */}

          {!newProject && <button className='btn btn-submit' onClick={() => addProject()}> New</button>}
          <button className='btn btn-submit ms-2' onClick={() => saveProject(false)}> Save  </button>
          <button className='btn btn-submit ms-2'> Delete </button>

        </div >
        <div>
          {/* Aqui va a ir el error */}
        </div>
        <div>
          <Return />
          <Logout />
        </div>
      </div >
      <div className='work-container'>
        <div className='w-75m-0 p-5'>
          <div className='d-flex align-items-center'>
            <div className='col-4'>
              <label htmlFor='projectId'> Project ID: </label>
              <label className='label-data ms-5' id='project-id'> {projectId}</label>
            </div>

            <div className='col-4'>
              <label htmlFor='status-id'>Status:</label>
              <select className='ms-4' name='status-id'>
                <option> status 1</option>
                <option> status 2</option>
                <option> status 3</option>
                <option> status 4</option>
                <option> status 5</option>
              </select>
            </div>
            <div className='col-4'>
              <label htmlFor='projectId'> Progress: </label>
              <label className='label-data ms-5' id='progress'> {`${progress} %`} </label>
            </div>
          </div>
          <hr></hr>
          <div className='d-flex align-items-center mt-2'>
            <div className='col-4'>
              <label className='form-label' htmlFor='project'>Project Code:</label>
              <input className='form-control' name='project' type='text' value={project} onChange={(e) => setProject(e.target.value)}></input>
            </div>
            <div className='col-8 ms-2'>
              <label className='form-label' htmlFor='names'>Name:</label>
              <input className='form-control' name='name' type='text' value={projectName} onChange={(e) => setProjectName(e.target.value)}></input>
            </div>
          </div>

          <div className='d-flex align-items-center mt-2'>
            <div className='col-4'>
              <label className='form-label' htmlFor='client-id'>Client:</label>
              <select className='form-select' name='client-id'>
                <option> Client 1</option>
                <option> Cliente 2</option>
                <option> Cliente 3</option>
                <option> Cliente 4</option>
                <option> Cliente 5</option>
              </select>
            </div>
            <div className='col-8'>
              <label className='form-label' htmlFor='title'>Project Title : </label>
              <input className='form-control' name='title' type='text' value={title} onChange={(e) => setTitle(e.target.value)}></input>
            </div>

          </div>

          <div className='d-flex align-items-center mt-2'>
            <div className='col-2'>
              <label className='form-label' htmlFor='po'>P.O.:</label>
              <input className='form-control' name='po' type='text' value={po} onChange={(e) => setPo(e.target.value)}></input>
            </div>
            <div className='col-2 ms-2'>
              <label className='form-label' htmlFor='cc'>Client Code: </label>
              <input className='form-control' name='cc' type='text' value={cc} onChange={(e) => setCc(e.target.value)}></input>
            </div>
            <div className='col-2 ms-2'>
              <label className='form-label' htmlFor='product-id'>Product: </label>
              <select className='form-select' name='client-id'>
                <option> Product 1</option>
                <option> Product 2</option>
                <option> Product 3</option>
                <option> Product 4</option>
                <option> Product 5</option>
              </select>
            </div>
            <div className='col-2 ms-2'>
              <label className='form-label' htmlFor='due-date'>Due Date: </label>
              <input className='form-control' name='due-date' type='date' value={dueDate} onChange={(e) => setDueDate(e.target.value)}></input>
            </div>
            <div className='col-2 ms-2'>
              <label className='form-label' htmlFor='start-date'>Start Date: </label>
              <input className='form-control' name='start-date' type='date' value={startDate} onChange={(e) => setStartDate(e.target.value)}></input>
            </div>
            <div className='col-2 ms-2'>
              <label className='form-label' htmlFor='finish-date'>Finish Date: </label>
              <input className='form-control' name='finish-date' type='date' value={finishDate} onChange={(e) => setFinishDate(e.target.value)}></input>
            </div>
          </div>

        </div>
      </div>
    </div >




  )
}

export default Project;