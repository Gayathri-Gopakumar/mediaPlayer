import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategoryAPI, getAllCategoriesAPI, removeCategoryAPI } from '../services/allAPI';


const Category = () => {
  const [allCategories,setallCategories]=useState([]) //to get data from api
  const [categoryName,setcategoryName]=useState("") //to store category name that we enter and pass it to api for server to store
  const [show, setShow] = useState(false);

  useEffect(()=>{
    getAllCategory()
  },[])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory=async()=>{
    if(categoryName){
        // api call
        await addCategoryAPI({categoryName,allVideos:[]})
        setcategoryName("")
        handleClose()
        getAllCategory()
    }
    else {
      toast.warning("Please fill form completely!!!")
    }
  }

  const getAllCategory=async()=>{
    const response= await getAllCategoriesAPI()
    console.log(response);
    
    if(response.status>=200 && response.status<300){
        setallCategories(response.data)
    }
  }
  console.log(allCategories);

  const removeCategory=async(categoryId)=>{
    await removeCategoryAPI(categoryId)
    getAllCategory()
  }
  

  return (
    <>
      <div className="d-flex justify-content-around">
        <h5>All Categories</h5>
        <button onClick={handleShow} style={{height:'50px',width:'50px'}} className='btn btn-info rounded-circle fs-5 fw-bolder text-center '>+</button>
      </div>

      <div className="container-fluid mt-3">
        {
          allCategories.length>0?
            allCategories?.map(categoryDetails=>(
              <div className="border rounded mb-3 p-3">
          <div className="d-flex justify-content-between">
            <h5>{categoryDetails?.categoryName}</h5>
            <button onClick={()=>removeCategory(categoryDetails?.id)} className='btn '><i className='fa-solid fa-trash text-danger'></i></button>
          </div>
          <div className="row mt-2">
            <div className="col-lg-6">
              {/* videos of particular category */}
            </div>
          </div>
        </div>
            ))

          :
          <div className="fw-bolder text-danger">No categories added yet!!!</div>
        }
      </div>

      <Modal centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>CATEGORY DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FloatingLabel
            controlId="floatingInputName"
            label="Category Name"
            className="mb-3"
          >
            <Form.Control onChange={e=>setcategoryName(e.target.value)} type="text" placeholder="Category Name" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button onClick={handleAddCategory} variant="primary">ADD</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme='colored' autoClose={3000}/>

    </>
  )
}

export default Category