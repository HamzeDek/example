import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import useSWR from 'swr'
const Job = () => {
const [data,setData]= useState({});

useEffect(()=>{
  fetch('http://localhost:9000/jobs')
  .then(res=>{
    return res.json();
  })
  .then(data =>{
    setData(data)
  })
  .catch(err=>{
    console.log(err.message)
  })
},[data])
if(!data){
  return <p>Sorry We don't Hav</p>
}

// const fetchData =async()=>{
// const response = await axios.get('http://localhost:9000/jobs')
// setData(data)
// return response.data
// }
// const {items} = useSWR('jobs',fetchData)
// if(!items){
//   return <p>Sorry We Don't Have....</p>
// }
  return (
    <>
    <form className='text-center'>
      <h1 className='text-6xl mt-6 m-8 font-bold uppercase'>Job </h1>
      <input type="number" placeholder='Searching' className='border-2 p-2 w-[30%] m-2' /> <br />
      <input type="text" placeholder='JobTittle' className='border-2 p-2 w-[30%] m-2' />
      <input type="text" placeholder='MaxSalary' className='border-2 p-2 w-[30%] m-2' /><br />
      <input type="text" placeholder='MinSalary' className='border-2 p-2 w-[30%] m-2' />
      {/* <input type="text" placeholder='Phone' className='border-2 p-2 w-[30%] m-2' /><br /> */}
      {/* <input type="text" placeholder='Commisition' className='border-2 p-2 w-[30%] m-2' />
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
        <th>JobTitle</th>
        <th>maxSalary</th>
        <th>MinSalary</th>
      </thead>
      <tbody className='bg-gray-100 '>
      {
        data.map((i)=>{
          <tr key={data.jobid}>
          <td>{i.jobid}</td>
          <td>{i.jobtitle} </td>
          <td>{i.maxsalary}</td>
          <td>{i.minsalary}</td>
        </tr>
        })
      }
      </tbody>
    </table>
    </>
  )
}

export default Job