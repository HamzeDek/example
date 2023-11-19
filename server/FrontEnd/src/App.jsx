import React from 'react'
// import Dashboard from './Components/Dashboard'
// import Register from './Components/Pages/Register'
// import Login from './Components/Pages/Login'
import Emplooyee from './Components/Pages/Emplooyee'
import Department from './Components/Pages/Department'
import Location from './Components/Pages/Location'
import Country from './Components/Pages/Country'
// import Region from './Components/Pages/Region'
import Attendance from './Components/Pages/Attendance'
import Manager from './Components/Pages/Manager'
import Job from './Components/Pages/Job'
import JobHistory from './Components/Pages/JobHistory'
import {Routes,Route,Link} from 'react-router-dom'
const App = () => {
  return (
    <>
     <div className="header flex text-white text-2xl p-2 bg-blue-600 gap-8">
      <div className="logo">
       <Link to="/Dashboard">
       <h1>HRM</h1>
       </Link>
      </div>
      <div className="menus">
        <nav className='flex gap-4'>
          <ul>
            <li>
              <Link to='/Department'>Department</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to='/Emplooyee'>Emplooyee</Link>
            </li>
          </ul>
          {/* <ul>
            <li>
              <Link to='/Region'>Region</Link>
            </li>
          </ul> */}
          <ul>
            <li>
              <Link to='/Country'>Country</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to='/Location'>Location</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to='/Attendance'>Attendance</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to='/Job'>Job</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to='/JobHistory'>JobHistory</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to='/Manager'>Manager</Link>
            </li>
          </ul>
          {/* <ul>
            <li className='bg-white px-2 text-blue-600 rounded-lg'>
              <Link to='/Register'>Register</Link>
            </li>
          </ul> */}
          {/* <ul>
            <li className='bg-green-600 text-white px-2'>
              <Link to='/Login'>Login</Link>
            </li>
          </ul> */}
        </nav>
      </div>
    </div>
    <Routes>
      {/* <Route path='/Register' element={<Register />}></Route> */}
      {/* <Route path='/Login' element={<Login />}></Route> */}
      <Route path='/Emplooyee' element={<Emplooyee />}></Route>
      <Route path='/Department' element={<Department />}></Route>
      {/* <Route path='/Region' element={<Region />}></Route> */}
      <Route path='/Location' element={<Location />}></Route>
      <Route path='/Country' element={<Country />}></Route>
      <Route path='/Attendance' element={<Attendance />}></Route>
      <Route path='/Manager' element={<Manager />}></Route>
      <Route path='/Job' element={<Job />}></Route>
      <Route path='/JobHistory' element={<JobHistory />}></Route>
      {/* <Route path='/DashBoard' element={<Dashboard />}></Route> */}
    </Routes>
    </>
  )
}

export default App