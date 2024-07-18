import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
    <Row className='w-100 mt-5 d-flex justify-content-center align-items-center ps-4'>
      <Col md={1}></Col>
      <Col md={5} className='p-3'>
        <h3>Welcome to <span className='text-success'>Media Player</span></h3>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vel ducimus iure praesentium vitae aut accusantium inventore recusandae, voluptas ea consectetur velit repellat officia animi quidem obcaecati ullam dignissimos delectus!</p>
        <button className='btn btn-success mt-5'>Get Started</button>
      </Col>
      <Col md={1}></Col>
      <Col md={5} className='d-flex justify-content-center align-items-center p-5'>
        <img src="https://static01.nyt.com/images/2022/08/03/arts/03fiveminutes-jazz-duke/03fiveminutes-jazz-duke-superJumbo.gif" alt="no image" className='w-75'/>
      </Col>
    </Row>

    <div className='container'>
      <h3 className='text-center my-5'>Features</h3>
      <Row>
        <Col md={1}></Col>
        <Col md={3}>
          <Card style={{ width:'100%' }} className='p-3 mt-3'>
          <Card.Img variant="top" src="https://media0.giphy.com/media/l4FB4bJ0xwefCpwhG/giphy.gif?cid=6c09b95297zr1couy4wzxdu7upun11f7r0tbssanf1gfs0fz&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" height={'200px'} />
            <Card.Body>
              <Card.Title>Card Titile</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bilk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className='px-md-5'>
        <Card style={{ width:'100%' }} className='p-3 mt-3'>
          <Card.Img variant="top" src="https://media2.giphy.com/media/tqfS3mgQU28ko/giphy.gif?cid=6c09b952xgwm2qy1neoet1h13oc5dsute6ywivzb3s7wndhb&ep=v1_gifs_search&rid=giphy.gif&ct=g" height={'200px'} />
            <Card.Body>
              <Card.Title>Card Titile</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bilk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card></Col>
        <Col md={3}>
        <Card style={{ width:'100%' }} className='p-3 mt-3'>
        <Card.Img variant="top" src="https://i.gifer.com/embedded/download/9xH0.gif" height={'200px'} />
            <Card.Body>
              <Card.Title>Card Titile</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bilk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card></Col>
          <Col md={1}></Col>
      </Row>
    </div>

    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-md-1"></div>
          <div className="col-md-10 border border-secondary p-3 my-5 border-2 rounded">
            <div className="row p-4">
              <div className="col-md-6">
                <h3 className='text-success'>Simple fast and Powerful</h3>
                <p className='mt-5'><span className='fs-5'> Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, culpa debitis, obcaecati quis laudantium ipsa molestiae cupiditate ducimus aut vel, tempora accusantium reiciendis harum qui soluta perferendis ea quos delectus.</p>
                <p><span className='fs-5'>Play Everything</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia assumenda odit, nisi alias soluta illum consequatur voluptatum, ut molestiae quas, magnam dolorem distinctio aperiam corrupti explicabo. In, magnam voluptas! Temporibus?</p>
                <p><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore accusamus voluptas laboriosam vero explicabo omnis architecto enim. Incidunt veritatis at enim saepe dolorum nihil, illo fugit fugiat, adipisci quisquam reprehenderit.</p>
              </div>
              <div className="col-md-6">
              <iframe width="100%" height="400" src="https://www.youtube.com/embed/KQ9W61rm5Fs" title="Portugal 0 - 0 Slovenia (3 - 0 Penalties) | Highlights | UEFA Euro | 2nd July 2024" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
        <div className='col-md-1'></div>
    </div>  
    </div>
    </>
  )
}

export default Landing