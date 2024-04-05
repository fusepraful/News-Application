import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [data, setData] = useState(defaultContactFormData);
  const { user } = useAuth();
  const [userData, setUserData] = useState(true);

  if (userData && user) {
    setData({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/form/contact', {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        toast.success("Message Sent Successfully");
        setData({
          username: user.username,
          email: user.email,
          message: ""
        });
      } else {
        toast.error("Something Went Wrong While Sending Message");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-light p-3 pb-5 bg-img-contact">
        <div className='w-100 '>
          <h1 className='display-3 text-center text-light p-3'>Contact Us</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 bg-light">
              <div className="m-2 container my-5 ">
                <h3 className='text-decoration-underline my-4'>Contact Form</h3>
                <div className="fs-6 mb-3">Post your message below. We will get back to you ASAP</div>
                <form id="contact_form" onSubmit={handleContactForm}>
                  <div className=" row">
                    <div className="mb-3 col-md-12">
                      <label>Your Name:</label>
                      <input onChange={handleInput} value={data.username} type="text" required maxLength="50" className="form-control" id="name" name="username" />
                    </div>
                    <div className="mb-3 col-md-12">
                      <label htmlFor="email_addr">Your Email:</label>
                      <input onChange={handleInput} value={data.email} type="email" required maxLength="50" className="form-control" id="email_addr" name="email" placeholder="name@example.com" />
                    </div>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="message">Message</label>
                    <textarea onChange={handleInput} value={data.message} className="form-control" id="message" name="message" rows="5"></textarea>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-success">Post</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 px-5 text-light">
              <h3 className='text-capitalize aqua-dark-text'>Hello, {user.username}</h3>
              <h3 className='text-decoration-underline'>Contact Us Information</h3>
              <p className='py-2 px-3'>Thank you for taking the time to contact MG Daily News. Please provide the following information to help us direct your comment to the proper MG Daily News department.</p>
              <h4 className='text-decoration-underline'>RESOURCES</h4>
              <ul>
                <li>
                  <a href="https://newsapi.org/" className='text-light text-decoration-none'>NEWS API</a>
                </li>
                <li>
                  <a href="https://newsapi.org/" className='text-light text-decoration-none'>Weather API</a>
                </li>
              </ul>
              <h4 className='text-decoration-underline'>Contact Information</h4>
              <p>For further assistance or inquiries, you can reach us through:</p>
              <ul>
                <li>Email: mansigedam@gmail.com</li>
                <li>Phone: +91-XXXXXXXXXX (India) | +1-XXX-XXX-XXXX (International)</li>
                <li>College Of Management And Computer Science, Yavatmal</li>
                <li>Address:  Behind Narangi Nagar Near Cotton Market Square, 13/4 (A, Dhamangaon Road, Yavatmal, Maharashtra 445001)</li>
              </ul>
            </div>
          </div>
          <br /><br /><br /> <br /><br /><br />
        </div>
      </div>
    </>
  );
}

export default Contact;
