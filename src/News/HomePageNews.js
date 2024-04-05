import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const HomePageNews = () => {
    const { user } = useAuth();
    const [breakingNews, setBreakingNews] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBreakingNews = async () => {
            try {
                const response = await axios.get(
                    "https://newsapi.org/v2/top-headlines?country=in&apiKey=3cdeb8bfec2e4507a116a5d6b996857e"
                );
                setBreakingNews(response.data.articles);
            } catch (error) {
                console.error('Error fetching breaking news:', error);
            }
        };

        fetchBreakingNews();
    }, []);

    return (
        <>
            <br />
            <hr className='text-white mt-4 pt-1' />
            <div className='bg-breakingnews text-light container mt-5'>
                <h1 className='text-center mt-2'>Breaking News</h1>
                <div className="row mt-4">
                    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            {breakingNews.map((article, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    data-bs-target="#carouselExampleDark"
                                    data-bs-slide-to={i}
                                    className={`text-light ${i === 0 ? 'active' : ''}`}
                                    aria-label={`Slide ${i + 1}`}
                                ></button>
                            ))}
                        </div>
                        <div className="carousel-inner">
                            {breakingNews.map((article, i) => (
                                <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`} data-bs-interval={10000}>
                                    <img
                                        src={article.urlToImage || "https://www.shutterstock.com/shutterstock/photos/1928997539/display_1500/stock-vector-breaking-news-template-with-d-red-and-blue-badge-breaking-news-text-on-dark-blue-with-earth-and-1928997539.jpg"}
                                        height="500px"
                                        onClick={() => navigate('/news/allnews',)}
                                        className="w-100"
                                        alt={article.title}
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <div className="black-background mt-4"
                                            onClick={() => navigate('/news/allnews',)}>

                                            <h3 className='text-title'>{article.title}</h3>
                                            <p>{article.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="text-light carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="text-light carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="text-light carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="text-light carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePageNews;
