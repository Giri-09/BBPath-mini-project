import React, { Fragment, useEffect, useState } from 'react';
import CustomNav2 from '../CustomNav2';
import Footer from '../Footer';
import HomeCard from '../HomeCard';
import "./index.css"
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'


const ContactUs = () => {
  const [jwtToken, setJwtToken] = useState(Cookies.get('jwt_token'));

  const onClickLogout = () => {
    Cookies.remove('jwt_token');
    setJwtToken(undefined);
  };

  useEffect(() => {
    setJwtToken(Cookies.get('jwt_token'));
  }, []);

  return (
    <Fragment>
      <CustomNav2 onClickLogout={onClickLogout} />
      <div className='contact-bg'> <h1>Hello there!</h1>
    <p>We greatly value your feedback and interaction here at Balaji Bright Path (BBPath). Our mission is to provide top-notch
        CSE Courses and Pharmacy education, tailored to your needs, and your input plays a crucial role in achieving that goal.</p>

    <p>If you have any questions, suggestions, or simply want to share your thoughts, please don't hesitate to reach out to
        us. Our friendly team is always thrilled to connect with our students and enhance your learning experience.</p>

    <h2>Contact Details:</h2>
    <p>
        To get in touch, you can fill out the contact form below with your details, and we'll get back to you as swiftly as
        possible. Alternatively, you can shoot us an email at <a href="mailto:contact@bbpath.com">contact@bbpath.com</a>.
        While we strive to respond promptly, do bear with us as we handle a high volume of inquiries.
    </p>

    <h2>Social Media:</h2>
    <p>For those who prefer staying connected through social media, you can find us on the following channels:</p>
    <ul>
        <li>Facebook: <a href="https://www.facebook.com/BalajiBrightPath" target="_blank">BalajiBrightPath</a></li>
        <li>Twitter: <a href="https://twitter.com/BBPath_Official" target="_blank">@BBPath_Official</a></li>
        <li>Instagram: <a href="https://www.instagram.com/balajibrightpath" target="_blank">@balajibrightpath</a></li>
    </ul>

    <p>We look forward to hearing from you and are excited to continue making BBPath the best course provider for CSE Courses
        and Pharmacy education. Your active participation is what makes our community thrive!</p>

    <p>Thank you for being a part of the BBPath family!</p>

    <footer>
        <p>Best regards,</p>
        <p>The BBPath Team</p>
    </footer></div>
  
      <Footer />
    </Fragment>
  )
}

export default ContactUs;
