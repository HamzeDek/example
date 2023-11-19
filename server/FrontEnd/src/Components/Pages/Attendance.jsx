import React, { useState } from 'react'

const Attendance = () => {


  return (
    <>
    <form className='text-center'>
      <h1 className='text-6xl mt-6 m-8 font-bold uppercase'>Attendances </h1>
      <input type="number" placeholder='Searching' className='border-2 p-2 w-[30%] m-2' /> <br />
      <input type="text" placeholder='Absent' className='border-2 p-2 w-[30%] m-2' />
      <input type="text" placeholder='Present' className='border-2 p-2 w-[30%] m-2' /><br />
      <input type="date" placeholder='Shift' className='border-2 p-2 w-[30%] m-2' />
      <input type="date" placeholder='' className='border-2 p-2 w-[30%] m-2' /><br />
      <input type="text" placeholder='shift' className='border-2 p-2 w-[30%] m-2' />
      {/* <input type="" placeholder='DOB' className='border-2 p-2 w-[30%] m-2' /><br /> */}
      <select name="" id="" className='border-2 p-2 w-[30.9%]'>
        <option value="">EmplooyeeId</option>
        <option value="">1</option>
      </select>
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
        <th>Present</th>
        <th>StartDate</th>
        <th>Absent</th>
        <th>EndDate</th>
        <th>Shift</th>
        <th>EmplooyeeId</th>
      </thead>
      <tbody className='bg-gray-100 '>
        <tr>
          <td>1</td>
          <td>P</td>
          <td>2023-10-13 06:00am</td>
          <td>Null</td>
          <td>2023/10/13 05:30pm</td>
          <td>afterNoon</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>
    </>
  )
}

export default Attendance