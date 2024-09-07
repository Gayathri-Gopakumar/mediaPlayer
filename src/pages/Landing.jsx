import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from'../assets/landing.gif'
import feature1 from'../assets/feature1.jpg'
import feature2 from'../assets/feature2.jpg'
import feature3 from'../assets/feature3.jpg'
import Card from 'react-bootstrap/Card';



const Landing = () => {
  return (
    <div style={{paddingTop:'10px'}} className='container'>
      {/* landing part */}
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}} className='mt-3'>Media player app will allow user to add or remove their uploaded videos from youtube and also allow them to arrange it in different categories by drag and drop. User can also manage their watch history. Start exploring our site now!!</p>
          <Link to={'/home'} className='btn btn-info'>Get Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
            <img className='ms-5' src={landingImg} alt="" />
        </div>
      </div>
      {/* features */}
      <div className="my-5">
        <h4 className='text-center'>FEATURES</h4>
          <div className="row mt-5 ms-5">
            <div className="col-lg-4 mt-2">
                <Card className='p-2' style={{ width: '20rem' }}>
                    <Card.Img variant="top" height={'250px'} src={feature1} />
                    <Card.Body>
                      <Card.Title>Managing Videos</Card.Title>
                      <Card.Text>
                       You can upload and delete videos easily.
                      </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-lg-4 mt-2">
                <Card className='p-2 ' style={{ width: '20rem' }}>
                    <Card.Img variant="top" height={'250px'} src={feature2} />
                    <Card.Body>
                      <Card.Title>Categorize Videos</Card.Title>
                      <Card.Text>
                       You can categorize videos easily by drag and drop.
                      </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-lg-4 mt-2">
                <Card className='p-2' style={{ width: '20rem' }}>
                    <Card.Img variant="top" height={'250px'} src={feature3} />
                    <Card.Body>
                      <Card.Title>Managing History</Card.Title>
                      <Card.Text>
                       You can manage watch history of all videos.
                      </Card.Text>
                    </Card.Body>
                </Card>
            </div>
          </div>
      </div>
      {/* links */}
      <div style={{height:'500px'}} className="container border rounded">
        <div className="row mt-2 align-items-center">
          <div className="col-lg-5  m-5">
              <h3 className='text-warning'>Simple, Fast and Powerful</h3>
              <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nihil voluptas error, culpa expedita vero dicta, aperiam ducimus illum quia maxime deserunt maiores asperiores nemo ratione aliquam, quos tenetur facilis.</p>
              <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatem a pariatur quibusdam hic ad reprehenderit, asperiores harum praesentium quidem aut facilis tenetur laudantium. Cumque molestiae repellendus hic tenetur fugiat.</p>
              <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum asperiores accusamus, eos ex, quibusdam exercitationem impedit nam quas a optio placeat quo suscipit facilis aut reprehenderit corrupti esse ut excepturi!</p>
          </div>
          <div className="col-lg-6 ">
          <div className='iframe-container'><iframe width="100%" height="380" src="https://www.youtube.com/embed/9AizchSQURA" title="Kuthanthram - Manjummel Boys Promo Song | Chidambaram | Sushin Shyam ft. Vedan | Parava Films" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Landing