import React from 'react';
import { useAuth } from '../store/auth';

const About = () => {
    const { user } = useAuth();

    return (
        <>
            <div className="bg-img-about">
                <div className='w-100 '>
                    <h1 className='display-3 text-center text-light p-3 text-decoration-underline'>About Us</h1>
                </div>
                <div className="row">
                    <div className="col-md-7">

                    </div>
                    <div className="col-md-5 text-light">
                        <h3 className="container-fluid aqua-dark-text text-capitalize">
                            Hello {user.username}
                        </h3>
                        <div className="container fw-para py-3" style={{ maxHeight: '400px', overflowY: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            <h4> Welcome to <span className="aqua-dark-text">MG</span>  Daily News</h4>
                            <p>
                                your go-to destination for staying informed about the latest news both locally and globally. Our platform is meticulously designed to provide you with comprehensive coverage of Indian news, international events, and community happenings.
                            </p>
                            <p>
                                Led by Mansi Gedam, a dedicated student with a passion for delivering accurate and timely information, our team is committed to keeping you up-to-date with reliable news articles sourced from reputable sources.
                            </p>
                            <p>
                                At <b> <span className="aqua-dark-text">MG</span>  Daily News</b>
                                , we believe in fostering community engagement and participation. That's why our platform allows users like you to contribute by uploading local news stories, ensuring that everyone has a voice in shaping the narrative.
                            </p>
                            <p>
                                Whether you're interested in politics, economics, sports, or entertainment, [Your Application Name] covers a wide range of topics to cater to diverse interests. With an intuitive interface and a commitment to accuracy and credibility, we strive to be your trusted source for news updates.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14957.17616684441!2d78.1405573!3d20.4119775!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd3ef35d871060b%3A0x1579d6369ff707d0!2z4KSV4KWJ4KSy4KWH4KScIOCkkeClniDgpK7gpYXgpKjgpYfgpJzgpK7gpYfgpILgpJ8g4KSF4KWF4KSj4KWN4KShIOCkleClieCkruCljeCkquCljeCkr-ClgeCkn-CksCDgpLjgpL7gpK_gpKjgpY3gpLgsIOCkr-CkteCkpOCkruCkvuCksyAo4KSc4KS-4KSc4KWCIOCkleClieCksuClh-CknCk!5e0!3m2!1smr!2sin!4v1707668775067!5m2!1smr!2sin"
                    width="100%"
                    height="450"
                    style={{ border: "0" }}
                    title="Map"
                ></iframe>
            </div>
        </>
    );
};

export default About;
