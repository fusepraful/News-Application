import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import NewsCategoryNavbar from './NewsCategoryNavbar';


const IndianNews = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress(10)
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=3cdeb8bfec2e4507a116a5d6b996857e`
        );
        setProgress(60)
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    setProgress(80);

    fetchNews();
    setProgress(100);
  }, [category]);

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };


  return (
    <div>
       <NewsCategoryNavbar/>
        <div className="bg-secondary">
          <nav className="navbar text-center navbar-expand-lg navbar-dark " style={{ backgroundColor: "black" }}>
            <div className="container-fluid ">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse d-flex justify-content-center align-item-center" id="navbarNav">
                <ul className="navbar-nav ">   
                  <li className="nav-item ">
                    <NavLink
                      className="nav-link px-3 h6"
                      onClick={() => handleCategoryChange('general')}
                    >
                      General
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link px-3 h6"
                      onClick={() => handleCategoryChange('business')}
                    >
                      Business
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link px-3 h6"
                      onClick={() => handleCategoryChange('entertainment')}
                    >
                      Entertainment
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link px-3 h6"
                      onClick={() => handleCategoryChange('technology')}
                    >
                      Technology
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link px-3 h6"
                      onClick={() => handleCategoryChange('health')}
                    >
                      Health
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link px-3 h6"
                      onClick={() => handleCategoryChange('science')}
                    >
                      Science
                    </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink
                      className="nav-link px-3 h6"
                      onClick={() => handleCategoryChange('sports')}
                    >
                      Sports
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Progress Bar Start */}

          <LoadingBar
            color='#f11946'
            progress={progress}
          />



          <div className="container ">
            <h3 className='bg-news-heading py-3 text-center text-decoration-underline text-capitalize mb-3'>Indian News - {category} Category</h3>
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {news.map((article, index) => (
                <div key={index} className="col">
                  <div className="card h-100">
                    <img
                      src={article.urlToImage === null ? "https://resize.indiatvnews.com/en/resize/newbucket/400_-/2023/11/breaking-news-template-6-1698627651-1700536290.jpg" : article.urlToImage}
                      className="card-img-top"
                      alt={article.description}
                    />
                    <div className="card-body">
                      <h6 className='fw-bold bg-danger text-light p-2 rounded'>NEWS FROM :  {article.source.name}</h6>
                      <h3 className="card-title fw-bold">{article.title}</h3>
                      <h6 className='text-danger fw-bold'>
                        Author : {article.author === null ? article.source.name : article.author}
                      </h6>
                      <h6 className='text-success fw-bold'>
                        Published At : {article.publishedAt}
                      </h6>
                      <p className="card-text">
                        <span className='fw-bold'>Description:</span>
                        <br />{article.description}
                      </p>
                      <div className='card-title text-muted'>
                        <span className='fw-bold text-dark'>Content :</span>
                        <br />{article.content}
                      </div>

                      <div>
                        <a target='_blank' href={article.url}  className='btn btn-primary' rel="noreferrer">Read More</a>

                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
};

export default IndianNews;
