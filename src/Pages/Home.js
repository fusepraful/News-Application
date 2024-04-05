import React from 'react'
import Heading from '../Components/Heading'
import { Link } from 'react-router-dom'
import HomePageNews from '../News/HomePageNews'
import { useAuth } from '../store/auth'

const Home = () => {
  const { user } = useAuth();

  return (
    <>
      <div className="bg-home  pt-5">
        <div className="row">
          <div className="col-md-6 pt-3">
            <div className="text-center">
              <Heading />
            </div>
            <h3 className='pt-4 text-subhead text-center'>We Are Provide You Live News </h3>
            <h6 className='text-light container home-para pe-5 py-3'>
              Welcome to our news portal, your go-to source for timely and insightful updates on the latest global events, groundbreaking developments, and compelling stories shaping our world. Stay informed with our curated content that cuts through the noise, delivering concise yet comprehensive coverage to keep you in the know. Join us on the journey of discovery and stay ahead with the news that matters.
            </h6>
            <div className="mt-2 ms-4">
              <h5 className='text-light home-para '>For Upload Your News ?</h5>

            </div>

            <div className='mt-4'>
              {user ?
                <Link to="/uploadnews" className='home-button1 px-5 btn-hr rounded text-light'>Upload News</Link>
                :
                <>
                  <Link to='/register' className='home-button1 text-light rounded'>REGISTER NOW</Link>
                  <Link to='/login' className='home-button2  text-light rounded'>LOGIN NOW</Link>
                </>}
            </div>

          </div>
          <div className="col-md-6 ">
            <img className='img-home1 border mt-3' src="https://media.istockphoto.com/id/1219980553/photo/online-news-on-a-smartphone-and-laptop-woman-reading-news-or-articles-in-a-mobile-phone.jpg?s=612x612&w=0&k=20&c=QodY8pXN5DbLs3-FhwWhhYKnsOE4Iixky_SwdGitwnQ=" alt="homeimage" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <HomePageNews />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home