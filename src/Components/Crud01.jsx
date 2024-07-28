import React, { useEffect, useState } from 'react'

function Crud01() {
    const [ userData, setUserdata] = useState([])
    useEffect(()=>{
        const takeData =async()=>{
            const res = await fetch("https://jsonplaceholder.typicode.com/todos")
           const data = await res.json()
           const jsson  = JSON.stringify(data)
           console.log(jsson)
setUserdata(jsson)

        }
        // takeData()
    })
  return (
    <div>
      <h3>Crud child</h3>
      <table className='table table-hover'>
        <thead>
            <tr>
                <td>Sr.No</td>
                <td>Id</td>
                <td>Title</td>
                <td>Completed</td>
                
            </tr>
        </thead>
       <tbody>
        <tr>
            {
                userData.map((item)=>(
                    <td>{item.id}</td>
                ))
            }
        </tr>
       </tbody>
      </table>
    </div>
  )
}

export default Crud01
