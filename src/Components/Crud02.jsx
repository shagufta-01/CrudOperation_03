import React, { useState,useEffect } from 'react'
import { Dataa } from './Dataaa'
function Crud02() {
    const [data, setData] =useState([])
    useEffect(()=>{
        setData(Dataa)
    })
  return (
    <div>
   <table className='table table-hover'>
    <thead>
      <tr>
        <td>Sr.No </td>
        <td>Id </td>
        <td>Title </td>
        <td>Completed </td>
     
      </tr>
    </thead>
    <tbody>
     {
      data.map((item, index)=>{
        return (
<tr key={index}>
<td>{index+1}</td>
<td>{item.id}</td>
<td>{item.title}</td>
<td>{item.completed}</td>

<button className='btn btn-primary' onClick={(e)=>handleEdit(item.id)}>Edit</button>&nbsp;
{/* <button className='btn btn-success' onClick={(e)=>handleUpdate(item.id)}>Update</button> */}
<button className='btn btn-danger' onClick={(e)=>handleDelete(item.id)}>Delete</button>


        </tr>
        )
     })
     } 
    </tbody>
  </table>
    </div>
  )
}

export default Crud02
