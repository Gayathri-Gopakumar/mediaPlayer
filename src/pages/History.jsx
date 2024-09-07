import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI'

const History = () => {
const[historyDetails,setHistoryDetails]=useState([])

// getHistory effect should work when component is loaded,ie,when page is loaded
useEffect(()=>{
getHistory()
},[])

// get history from API
const getHistory=async()=>{
  const response= await getHistoryAPI()
  console.log(response);
  if(response.status>=200 && response.status<300){
    setHistoryDetails(response.data)
  }
  
}

// delete from history
const removeHistory=async (historyId)=>{
  await removeHistoryAPI(historyId)
  getHistory()
}


  return (
    <div className='container' style={{paddingTop:'10px'}}>
     <div className='container-fluid d-flex justify-content-between'>
        <h3>Watch History</h3>
       <Link to={'/home'}>Back to Home</Link>
     </div>
     <table className='table shadow my-5'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Link</th>
          <th>Time Stamp</th>
          <th><i className="fa-solid fa-ellipsis-vertical"></i></th>
        </tr>
      </thead>
      
    
       <tbody >
        {
          historyDetails?.length>0?
        historyDetails?.map((details,index)=>(
          <tr key={details?.id}>
          <td>{index+1}</td>
          <td>{details?.caption}</td>
          <td><a href={details?.link} target='_blank'>{details?.link}</a></td>
          <td>{details?.timeStamp}</td>
          <td><button onClick={()=>removeHistory(details?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>
        </tr>
        ))
        :
        <div className="text-danger fw-bolder">
          Your watch history is empty now!
        </div>
      }
       
     </tbody>
    

     </table>
      
      </div>
  )
}

export default History