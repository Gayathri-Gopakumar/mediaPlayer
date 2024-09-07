import React, { useState } from 'react'
import Add from'../components/Add'
import { Link } from 'react-router-dom'
import View from'../components/View'
import Category from'../components/Category'



const Home = () => {

const [uploadVideoResponse,setUploadVideoResponse]=useState("") //state lifting : to share state bwn add and view components as props from parent(Home)


  return (
    <div style={{paddingTop:'10px'}}>
      <div className="container d-flex justify-content-between">
        <Add setUploadVideoResponse={setUploadVideoResponse}/>
        <Link to={'/history'}>Watch History</Link>
      </div>
      <div className="container-fluid row my-5">
          <div className="col-lg-6">
              <h3>All Videos</h3>
              <View uploadVideoResponse={uploadVideoResponse}/>
          </div>
          <div className="col-6">
              <Category/>
          </div>
      </div>
      
    </div>
  )
}

export default Home