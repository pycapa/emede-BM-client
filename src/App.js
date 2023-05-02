import { useState } from 'react';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';


import './App.css';

// Custom Components.
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Project from './Components/Project/Project';




function App() {


  // Variable booleana indica si estaria editando un proyecto o agregando uno nuevo.

  const [newProject, setNewProject] = useState(true)

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Navigate to='/login' />} />

          <Route path='/login'
            element={<Login />
            } />

          <Route path='/dashboard'
            element={<Dashboard
              setNewProject={setNewProject}
            />} />


          <Route path='/project'
            element={<Project
              newProject={newProject}
              setNewProject={setNewProject}
            />} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
