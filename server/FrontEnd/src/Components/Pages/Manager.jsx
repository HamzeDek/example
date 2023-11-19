import React, { useState } from 'react'
import axios from 'axios'
import useSWR from 'swr'
const Manager = () => {
const fetchData = async()=>{
  const res = await axios.get('localhost:3000/api/managers/')
  return res.data
}
const {data} = useSWR('managers',fetchData)
if(!data){
  return <p>Sorry</p>
}
  return (
    <>
    <form className='text-center'>
      <h1 className='text-6xl mt-6 m-8 font-bold uppercase'>Manager </h1>
      <input type="number" placeholder='Searching' className='border-2 p-2 w-[30%] m-2' /> <br />
      <input type="text" placeholder='ManagerName' className='border-2 p-2 w-[30%] m-2' />
      <input type="text" placeholder='ManagerAddress' className='border-2 p-2 w-[30%] m-2' /><br />
      <input type="text" placeholder='ManagerPhone' className='border-2 p-2 w-[30%] m-2' />
      
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
        <th>ManagerName</th>
        <th>ManagerAddress</th>
        <th>ManagerPhone</th>
      </thead>
      <tbody className='bg-gray-100 '>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
        </tbody>
    </table>
    </>
  )
}

export default Manager