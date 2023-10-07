import React from 'react';
import image1 from '../../public/assets/facebook-blue.svg'
import image2 from '../../public/assets/linkedin-blue.svg'
import image3 from '../../public/assets/twitter-blue.svg'
import image4 from '../../public/assets/youtube-blue.svg'
import image5 from '../../public/assets/globe-gray.svg'
import image6 from '../../public/assets/phone-solid.svg'
import image7 from '../../public/assets/envelope-solid.svg'
import image8 from '../../public/assets/location-arrow-solid.svg'

function Contact() {
  return (
    <>

      <footer>
        <div className="wrapper py-5 ">
          <div className="left">
            <div className="top">
              <h1 className='text-center text-6xl font-bold mt-3 py-3'>Contact Us</h1>

              <ul className='flex justify-center py-1 w-full gap-5'>
                <li>
                  <a href="#"><img src={image6} className='w-[20px]' alt="" /></a>
                </li>
                <li><a href="#"><img src={image7} className='w-[20px]' alt="" /></a></li>
                <li><a href="#"><img src={image8} className='w-[20px]' alt="" /></a></li>
              </ul>

              <p className='text-center italic text-4xl mt-1'>"Your Prosperity Is Our Priority"</p>

              <ul className='flex items-center justify-center gap-5 py-5'>
                <li><a href="#"><img src={image1} className='w-7' alt="icon" /> </a></li>
                <li><a href="#"><img src={image2} className='w-7' alt="icon" /></a></li>
                <li><a href="#"><img src={image3} className='w-7' alt="icon" /></a></li>
                <li><a href="#"><img src={image4} className='w-7' alt="icon" /></a></li>
              </ul>
            </div>
            <div className="bottom float-right flex  flex-row gap-2 px-4 py-4  ">
              <div className='flex flex-row gap-3'>
                <img src={image5} alt="globe" className='w-5' />
                <p className="hover:underline">Choose language</p>
              </div>
              <p className='hover:underline'>English</p>
          </div>
        </div>
      </div>
    </footer >
    </>

  );
}

export default Contact;
