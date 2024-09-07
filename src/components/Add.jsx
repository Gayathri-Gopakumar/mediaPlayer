import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadVideoAPI } from '../services/allAPI';

const Add = ({setUploadVideoResponse}) => {
const [invalidLink,setInvalidLink]=useState(false)

const [videoDetails,setVideoDetails]=useState({caption:"",url:"",link:""})

console.log(videoDetails);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbedURL=(link)=>{
    if(link.includes("v=")){
      let videoID=link.split("v=")[1].slice(0,11)
      console.log(videoID);
      setInvalidLink(false)
      setVideoDetails({...videoDetails,link:`https://www.youtube.com/embed/${videoID}`})
      
    }else{
      setInvalidLink(true)
      console.log("invalid url");
      setVideoDetails({...videoDetails,link:""})
      
    }
  }

  const handleUpload=async()=>{
    console.log("inside handleupload function");
    
      const {caption,url,link}=videoDetails
      if(caption && url && link){
       
       const result= await uploadVideoAPI(videoDetails)
       console.log(result);
       if(result.status>=200 && result.status<300){
        handleClose() //to close modal
        setVideoDetails({...videoDetails,caption:"",url:"",link:""})
        toast.success(`${result.data.caption} added to your collection!`)
        setUploadVideoResponse(result)
       }
      }
      else{
        toast.warning('Please fill the form completely!')
      }
  }

  return (
    <>
    <div className="d-flex align-items-center mt-5">
      <h5>Upload New Video</h5>
      <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5 '>+</button>
    </div>
      <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
        <Modal.Header closeButton>
        <Modal.Title>Uploading Video Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='border rounded p-3'>
          {/* caption */}
          <FloatingLabel
          controlId="floatingInput"
          
          className="mb-3"
        />
          <Form.Control onChange={e=>setVideoDetails({...videoDetails, caption:e.target.value})} type="text" placeholder="VIDEO CAPTION" />
          {/*  image url*/}
          <FloatingLabel
          controlId="floatingInputImage"
          // label="Image URL"
          className="mb-3"
        />
          <Form.Control onChange={e=>setVideoDetails({...videoDetails, url:e.target.value})} type="text" placeholder="Image URL" />

          {/* link */}
          <FloatingLabel
          controlId="floatingInputLink"
          // label="Youtube Video Link"
          className="mb-3"
        />
          <Form.Control onChange={e=>getEmbedURL(e.target.value)}  type="text" placeholder="Youtube Video Link" />
            {
              invalidLink && <div className="text-danger fw-bolder mt-3">Invalid Youtube Link</div>
            }

        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
    </>
  )
}

export default Add