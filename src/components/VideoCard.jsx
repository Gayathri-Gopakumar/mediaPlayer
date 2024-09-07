import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { storeHistoryAPI ,removeVideoAPI} from '../services/allAPI';


const VideoCard = ({displayData,setdeleteVideoResponse}) => {
  console.log(displayData);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () =>{
    setShow(true);
    // save history in json server
    const {caption,link}=displayData
    // get date and time of watch
    const sysTime=new Date()
    const timeStamp=sysTime.toLocaleString('en-US',{timeZoneName:'short'})
    console.log(timeStamp);
    const videoDetails={caption,link,timeStamp}
   await storeHistoryAPI(videoDetails) 
    
  }
  const removeVideo=async(videoId)=>{
    const result=await removeVideoAPI(videoId)
    // pass this response to view component(child to parent)
    setdeleteVideoResponse(result?.data)
  }

  return (
    <>
      <Card >
      <Card.Img onClick={handleShow} variant="top" src={displayData?.url} height={'200px'} />
      <Card.Body>
        <Card.Title className='d-flex align-items-center justify-content-between'>
          <p>{displayData?.caption}</p>
          <button onClick={()=>removeVideo(displayData?.id)} className='btn '><i className='fa-solid fa-trash text-danger'></i></button>
        </Card.Title>
      </Card.Body>
    </Card>

    <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="400" src={`${displayData?.link}?autoplay=1}`} title="caption"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
       
    </Modal>
      
    </>
  )
}

export default VideoCard