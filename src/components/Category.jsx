import React, { useEffect} from 'react'
import VideoCard from './VideoCard'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryApi, getAllCategory, removeCategoryApi, updateCategoryApi } from '../services/allApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



function Category({dragOut, setDragOut}) {
  const [show, setShow] = useState(false);
  const [categoryName , setCategoryName] = useState("")
  const [allCategory , setAllCategory] = useState([])
  const [addStatus , setAddStatus] = useState(false)
  const [updateStatus, setUpdateStatus] = useState(false)


  const handleClose = () => {setShow(false);
  setCategoryName("")
};

  const handleShow = () => setShow(true);

  console.log(categoryName);

  const handleCategoryAdd = async()=>{
    if(categoryName){
    const reqBody ={
      categoryName,
      allVideo:[]
    }
    const result= await addCategoryApi(reqBody)
    console.log(result);
    if(result.status>=200 && result.status<300){
      setCategoryName("")
      handleClose()
      toast.success('Category Added Successfully')
      setAddStatus(true)
      
    }
    else{
      toast.error('Something went wrong')
    }
  }
    else{
      toast.info('Please add a category name')
    }
  }

  const getCategory = async()=>{
    const result = await getAllCategory()
    setAllCategory(result.data)
  }
  console.log(allCategory);

const handleDelete = async(id)=>{
  await removeCategoryApi(id)
  setAddStatus(true)

}
const drageOver =(e)=>{
  e.preventDefault()
}
const VideoDrop =async(e, selectedCategory)=>{
  // category
  console.log('category id is :',selectedCategory);
  // videoDetails
  const vDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
  console.log(vDetails);
  // category - allvideo -videoDetails

  if(selectedCategory.allVideo.find(item => item.id == vDetails.id)){
    toast.warning('Video already added')
  }
  else{
     selectedCategory.allVideo.push(vDetails)
     const result = await updateCategoryApi(selectedCategory.id,selectedCategory)
    //  console.log(result);
    toast.success('Video added successfully')
     setUpdateStatus(true)
  }

}

const ondrag =(e, videoId, categoryDetails)=>{
  console.log(videoId, categoryDetails);
  const dataShare={videoId,categoryDetails}
  e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
}

  useEffect(()=>{
    setAddStatus(false)
    setUpdateStatus(false)
    setDragOut(false)
    getCategory()

  },[addStatus, updateStatus,dragOut])
  
  return (
    <>
    <h5 className='mt-5 mt-md-0'>Category</h5>

    <button className='btn btn-success w-100 mt-4' onClick={handleShow}>Add Category</button>

    {allCategory?.length>0?
    allCategory?.map((item)=>(
      <div className='p-3 border rounded mt-4' droppable onDragOver={(e)=>drageOver(e)} onDrop={(e)=>VideoDrop(e,item)}>
      <div className='d-flex justify-content-between'>
        <p className='mb-4'>{item.categoryName}</p>
        <button className='btn btn-danger'  onClick={()=>handleDelete(item.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
        </div>
    {item?.allVideo?.length>0?
    item?.allVideo?.map((video)=>(
    <div draggable onDragStart={(e)=>ondrag(e, video.id, item)}>
      <VideoCard video={video} isPresent={true} />
      </div>
    )) :null}
    </div>
    ))
    :
    <p className='text-danger mt-5'>No Category Added Yet</p>
    }
  
    
  
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='p-3 border rounded'>
            <input type="text" className='form-control' placeholder='Category name' onChange={(e)=>setCategoryName(e.target.value)} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleCategoryAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={5000} />

    </>
    
  )
}

export default Category