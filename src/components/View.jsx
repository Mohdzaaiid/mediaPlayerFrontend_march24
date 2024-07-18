import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getAllvideoApi, updateCategoryApi } from '../services/allApi'


function View({addVideoStatus, setDragOut}) {
  const [allVideo, setAllVideo] = useState([])
  const [deleteVideoStatus, setDeleteVideoStatus] = useState([])

  const getAllVideo = async()=>{
    const result = await getAllvideoApi()
    // console.log(result);
    setAllVideo(result.data)
  }
  console.log(allVideo);

  const dragOver = (e)=>{
    e.preventDefault()
  }
  const videoDrop = async(e)=>{
    const result = JSON.parse(e.dataTransfer.getData("dataShare"))
    console.log(result);

    const selectedCategory = result.categoryDetails

    const newDetails = selectedCategory.allVideo.filter((item)=>item.id!=result.videoId)
    console.log(newDetails);

    const reqBody = {
      categoryName:selectedCategory.categoryName,
      allVideo:newDetails,
      id:selectedCategory.id
    }
    const response = await updateCategoryApi(selectedCategory.id,reqBody)
    console.log(response);
    if(response.status>=200 && response.status<300){
      setDragOut(true)
    }
  }

  useEffect(()=>{
    getAllVideo()
  },[addVideoStatus,deleteVideoStatus])

  return (
    <>

    <div className="row w-100" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)}>
      <h4>All Videos</h4>

      {allVideo? 
      allVideo?.map((item)=>(<div className="col-md-3 mt-4">
        <VideoCard video={item} setDeleteVideoStatus={setDeleteVideoStatus} />
        </div>))
        
        :
        <p className='text-danger fs-5 mt-5'>Nothing To Display</p>
      }
        
      
    </div>
    
    </>
    
  )
}

export default View