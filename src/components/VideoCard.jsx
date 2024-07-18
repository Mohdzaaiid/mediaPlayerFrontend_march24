import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import {  deleteVideoApi } from '../services/allApi';
import { addVideoHistory } from '../services/allApi';





function VideoCard({video, setDeleteVideoStatus, isPresent}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    const caption = video?.caption
    const url = video?.embedLink
    const time = new Date()
    // console.log(time);
    const timeStamp = new Intl.DateTimeFormat("en-GB",{ year:'numeric', month:'2-digit', day:'2-digit',hour:'2-digit', minute:'2-digit', second:'2-digit'}).format(time)
    console.log(timeStamp);

    const reqBody = {
      caption, url, timeStamp
    }
  
  const result = await addVideoHistory(reqBody)
  console.log(result);
  
  }

  const handleDelete =async(id)=>{
    const result = await deleteVideoApi(id)
    setDeleteVideoStatus(result.data)
  }

  const videoDrag =(e ,video)=>{
    // console.log(typeof(id));
    console.log(video);
    e.dataTransfer.setData("videoDetails",JSON.stringify(video))
    //  console.log(`draged video details is`, video);
     
  }

  return (
    <>

     <Card style={{ width: '105%' }} draggable onDragStart={(e)=>videoDrag(e, video)} className='mt-4'>
      {!isPresent && <Card.Img variant="top" onClick={handleShow} src={video?.imageUrl} height={'200px'} />}
      <Card.Body>

      <div className='d-flex justify-content-between'>
        <Card.Text>{video?.caption}</Card.Text>

       {!isPresent && <Button variant="danger" onClick={()=>handleDelete(video?.id)}><FontAwesomeIcon icon={faTrash} /></Button>
       }
        </div>
      </Card.Body>
    </Card>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="514" src={`${video?.embedLink}?autoplay=1`} title="The Most Dangerous Kinds of People | Friday Khutbah | Nouman Ali Khan" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
      
    </>
    
  )
}

export default VideoCard