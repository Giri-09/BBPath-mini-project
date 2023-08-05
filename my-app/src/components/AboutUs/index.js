import React, { Fragment, useEffect, useState } from 'react';
import CustomNav2 from '../CustomNav2';
import Footer from '../Footer';
import HomeCard from '../HomeCard';
import "./index.css"
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'

const AboutUs = () => {
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
      <div className='contact-bg'>
      <h1>About Balaji Bright Path (BBPath)</h1>
    <p>Welcome to Balaji Bright Path (BBPath), your gateway to excellence in CSE Courses and Pharmacy education. Our
        mission is to empower aspiring students and professionals with cutting-edge knowledge and skills to thrive in
        their respective fields.</p>

    <h2>Why Choose BBPath?</h2>
    <ul>
        <li><strong>Expert Faculty:</strong> Our courses are led by experienced and passionate faculty members who are
            experts in their domains. They are dedicated to imparting knowledge and guiding students to achieve their
            academic and career goals.</li>
        <li><strong>Comprehensive Curriculum:</strong> We have meticulously designed our course curriculum to cover all the
            essential aspects of the CSE and Pharmacy fields. From fundamentals to advanced topics, we ensure a holistic
            learning experience.</li>
        <li><strong>State-of-the-Art Facilities:</strong> BBPath boasts state-of-the-art infrastructure and modern
            amenities to facilitate an environment conducive to learning. We believe in providing a comfortable and
            enriching space for our students.</li>
        <li><strong>Industry-Relevant Training:</strong> Our programs are aligned with the latest industry trends and
            practices. We focus on imparting practical skills and knowledge that are directly applicable in real-world
            scenarios.</li>
        <li><strong>Supportive Learning Environment:</strong> At BBPath, we foster a supportive and inclusive learning
            environment. Our faculty and staff are always available to assist students and address their queries.</li>
    </ul>

    <h2>Courses Offered:</h2>
    <ul>
        <li>Bachelor's and Master's programs in Computer Science and Engineering (CSE).</li>
        <li>Comprehensive courses in Pharmacy, catering to both academic and professional aspirations.</li>
    </ul>

    <p>Join BBPath and embark on a transformative educational journey that will prepare you to excel in the dynamic world
        of technology and healthcare.</p>

    <p>Let's build a brighter path to success together!</p>

    <p>The BBPath Team</p>
      </div>
  
      <Footer />
    </Fragment>
  )
}

export default AboutUs;
