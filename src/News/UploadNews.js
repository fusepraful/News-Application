import React, { useState, useEffect } from 'react';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
import { NavLink} from 'react-router-dom'

const defaultNewsForm = {
    username: "",
    email: "",
    headline: "",
    date: "",
    author: "",
    link: "",
    description: "",
    content: ""
}

const UploadNews = () => {
    const [addNews, setAddNews] = useState(defaultNewsForm);
    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            setAddNews(prevNews => ({
                ...prevNews,
                username: user.username,
                email: user.email,
            }));
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddNews(prevNews => ({
            ...prevNews,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/news/uploadnews', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(addNews)
            });

            if (response.ok) {
                setAddNews(defaultNewsForm);
                const data = await response.json();
                console.log(data);
                toast.success('News uploaded successfully');
            } else {
                throw new Error('Failed to upload news');
            }
        } catch (error) {
            console.error('Error uploading news:', error);
            toast.error('Error uploading news. Please try again.');
        }
    };

    return (
        <div className="border bg-dark text-light">
            <p className="h1 d-flex align-item-center justify-content-center py-4 bg-news-navbar font-weight-bold">Upload Your News Here</p>

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <div className="mx-2 mt-2">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <h3 className='text-decoration-underline aqua-dark-text'>User Information</h3>

                                <div className='ms-2'>
                                    <div className="cs-form my-2">
                                        <label className='mt-1'>Name</label>
                                        <input type="text" className="form-control mt-2" name="username" value={addNews.username || ''} onChange={handleChange} />
                                    </div>
                                    <div className="cs-form my-2">
                                        <label className='mt-1'>Email</label>
                                        <input type="email" className="form-control mt-2" name="email" value={addNews.email || ''} onChange={handleChange} />
                                    </div>
                                </div>

                                <h3 className='text-decoration-underline aqua-dark-text mt-2'>News Information</h3>
                                <div className='ms-2'>
                                    <div className="mt-2">
                                        <label className='mt-1'>News Headline</label>
                                        <input type="text" className="form-control mt-2" name="headline" value={addNews.headline} onChange={handleChange} />
                                
                                        <div className=" mt-2">
                                            <label className='mt-1'>News Date</label>
                                            <input type="date" className="form-control mt-2" name="date" value={addNews.date} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className=" mt-2">
                                        <label className='mt-1'>News Author</label>
                                        <input type="text" className="form-control mt-2" name="author" value={addNews.author} onChange={handleChange} />
                                    </div>
                                    <div className="mt-2">
                                        <label className='mt-1'>News Link</label>
                                        <input type="text" className="form-control mt-2" name="link" value={addNews.link} onChange={handleChange} />
                                    </div>
                                    <div className=" mt-2">
                                        <label className='mt-1'>News Description</label>
                                        <textarea className="form-control mt-2" rows="3" name="description" value={addNews.description} onChange={handleChange}></textarea>
                                    </div>
                                    <div className=" mt-2">
                                        <label className='mt-1'>News Content</label>
                                        <textarea className="form-control mt-2" rows="4" name="content" value={addNews.content} onChange={handleChange}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center mt-4">
                                <input className="me-2" type="checkbox" required />
                                <label htmlFor="terms" className="m-0">Accept All <NavLink to="/termsandpolicy">Terms & Conditions</NavLink></label>
                            </div>
                            <div className="d-flex justify-content-center align-items-center mt-4">
                                <button type='submit' className="btn my-3 btn-primary">
                                    Upload News
                                </button>
                            </div>
                        </form>
                    </div>
                </div>


                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <h1 className='aqua-dark-text py-2'>Free News Posting</h1>
                    <ul>

                        <li className=' mt-3 fw-para'> Take advantage of our free news posting service to get your press release out to our community!</li>

                        <li className=' mt-3 fw-para'> Posting news on CustomerThink is easy. Just email your press release to news@customerthink.com, with the title in the subject line, and the content in the body. Or, attach the press release in a Word document. Do not include tracking links.</li>

                        <li className=' mt-3 fw-para'> Content should be written in a press release style. We respect embargo requests — please note in the email.</li>

                        <li className=' mt-3 fw-para'> Press releases are published at the discretion of the Managing Editor. We generally only publish significant company announcements such as new products or major releases, mergers and acquisitions, etc.</li>

                        <li className=' mt-3 fw-para'> We don’t publish press releases about customer wins or case studies, analyst awards, partnerships, events, research, or personnel changes. Note: For research studies, consider blogging about the key findings.</li>

                        <li className=' mt-3 fw-para'> CustomerThink staff reviews and publishes new press releases every business day. Please note that the content must be relevant to our community. All links will be tagged as “no follow” to comply with Google guidelines.</li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default UploadNews;
