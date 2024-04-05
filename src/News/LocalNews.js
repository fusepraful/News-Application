import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCategoryNavbar from './NewsCategoryNavbar';

const LocalNews = () => {
  const [news, setNews] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(10);
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/news/uploadnews');
        setProgress(60);
        setNews(response.data.message); // Update to the new data structure
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setProgress(100);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <NewsCategoryNavbar />
      <div className='bg-secondary'>
        <div className="container">
          <h3 className='bg-news-heading py-3 text-center text-decoration-underline text-capitalize mb-3'>
            Indian News - Local Category
          </h3>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {news.map((article, index) => (
              <div key={index} className="col">
                <div className="card h-100">
                  <img
                    src={ "https://resize.indiatvnews.com/en/resize/newbucket/400_-/2023/11/breaking-news-template-6-1698627651-1700536290.jpg" }
                    className="card-img-top"
                    alt={article.description}
                  />
                  <div className="card-body">
                    <h6 className='fw-bold bg-danger text-light p-2 rounded'>NEWS FROM: {article.username}</h6>
                    <h3 className="card-title fw-bold">{article.headline}</h3>
                    <h6 className='text-danger fw-bold'>
                      Author: {article.author}
                    </h6>
                    <h6 className='text-success fw-bold'>
                      Published At: {article.date}
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
                      <a target='_blank' href={article.link} className='btn btn-primary' rel="noreferrer">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LocalNews;
