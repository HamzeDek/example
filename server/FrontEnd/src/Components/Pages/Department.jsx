import React, { useState } from 'react'

const Department= () => {


  return (
    <>
    <form className='text-center'>
      <h1 className='text-6xl mt-6 m-8 font-bold uppercase'>Department </h1>
      <input type="text" placeholder='Searching' className='border-2 p-2 w-[30%] m-2' /> <br />
      <input type="text" placeholder='DepartmentName' className='border-2 p-2 w-[30%] m-2' />
      {/* <input type="text" placeholder='LastName' className='border-2 p-2 w-[30%] m-2' /><br />
      <input type="text" placeholder='Email' className='border-2 p-2 w-[30%] m-2' />
      <input type="text" placeholder='Phone' className='border-2 p-2 w-[30%] m-2' /><br />
      <input type="text" placeholder='Commisition' className='border-2 p-2 w-[30%] m-2' />
      <input type="date" placeholder='DOB' className='border-2 p-2 w-[30%] m-2' /><br /> */}
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
        <th>DepartmentName</th>
        {/* <th>lastName</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Commisition</th>
        <th>DOB</th> */}
      </thead>
      <tbody className='bg-gray-100 '>
        <tr>
          <td>1</td>
          <td>ICT </td>
          {/* <td>Mohamed</td>
          <td>Mariam@hotmail.com</td>
          <td>0974418047</td>
          <td>60%</td>
          <td>2019-2-21</td> */}
        </tr>
      </tbody>
    </table>
    </>
  )
}

export default Department