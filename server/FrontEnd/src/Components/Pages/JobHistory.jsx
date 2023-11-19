import React, { useState } from 'react'

const jobHistory = () => {


  return (
    <>
    <form className='text-center'>
      <h1 className='text-6xl mt-6 m-8 font-bold uppercase'>JobHistory </h1>
      <input type="number" placeholder='Searching' className='border-2 p-2 w-[30%] m-2' /> <br />
      <input type="date" placeholder='FirstName' className='border-2 p-2 w-[30%] m-2' />
      <input type="date" placeholder='LastName' className='border-2 p-2 w-[30%] m-2' /><br />
      <input type="number" placeholder='EmplooyeeId' className='border-2 p-2 w-[30%] m-2' />
      <input type="number" placeholder='DepartmentId' className='border-2 p-2 w-[30%] m-2' /><br />
      <input type="number" placeholder='Jobid' className='border-2 p-2 w-[30%] m-2' />
      {/* <input type="date" placeholder='DOB' className='border-2 p-2 w-[30%] m-2' /><br /> */}
    </form>
    <div className="btns flex gap-64 m-auto justify-center text-center mt-2">
      <div className="Add">
        <button className='bg-green-600 px-8 rounded-lg h-9 text-2xl text-white'>Add</button>
      </div>
      <div className="Update">
        <button className='bg-orange-400 px-4 rounded-lg h-9 text-2xl text-white'>Update</button>
      </div>
      <div className="Delete">
        <button className='bg-red-600 px-5 rounded-lg h-9 text-2xl text-white'>Delete</button>
      </div>
    </div>
    <table className='text-center justify-center m-auto mt-4 w-[61%]'>
      <thead className='bg-black p-2 text-gray-300'>
        <th>ID</th>
        <th>StartDate</th>
        <th>EndDate</th>
        <th>EmplooyeeId</th>
        <th>DepartmentId</th>
        <th>jobId</th>
        {/* <th>DOB</th> */}
      </thead>
      <tbody className='bg-gray-100 '>
        <tr>
          <td>1</td>
          <td>2020-3-4 </td>
          <td>2024-4-5</td>
          <td>5</td>
          <td>8</td>
          <td>2</td>
          {/* <td>2019-2-21</td> */}
        </tr>
      </tbody>
    </table>

    </>
  )
}

export default jobHistory