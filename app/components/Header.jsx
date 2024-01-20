import React, { useState } from 'react';
import HomeImage from '../../public/HomeImage.svg'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      <section className="bg-white mt-6">
        <div className="container max-w-screen-xl mx-auto px-4">
          <nav className="flex-wrap lg:flex items-center ">
            <div className="flex items-center mb-10 lg:mb-0 w-1/4" style={{mixBlendMode:'multiply'}}>
              <h1 className='text-purple-500 font-bold text-3xl'>Qcheck</h1>
              <button
                className="md:hidden w-10 h-10 ml-auto flex items-center justify-center border-blue-500 text-blue-500 rounded-md"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <h1 className='text-white bg-purple-500 w-16 font-bold text-3xl flex justify-center items-center absolute right-2 border-2 hover:bg-purple-500 hover:text-white border-purple-500 rounded-sm'>&#8801;</h1>
              </button>
            </div>
            <ul className={`lg:flex flex-col lg:flex-row lg:items-center lg:mx-auto lg:space-x-8 xl:space-x-14 ${!navbarOpen ? 'hidden' : 'flex'}`}>
              <li className="font-semibold text-gray-900 hover:text-purple-500 transition ease-in-out duration-300 mb-5 lg:mb-0">
                <a href="#">Home</a>
              </li>
              <li className="font-semibold text-gray-900 hover:text-purple-500 transition ease-in-out duration-300 mb-5 lg:mb-0">
                <a href="#">Partner Companies</a>
              </li>
             
              <li className="font-semibold text-gray-900 hover:text-purple-500 transition ease-in-out duration-300 mb-5 lg:mb-0">
                <a href="#">About us</a>
              </li>
            </ul>
            <div className={`lg:flex flex-col md:flex-row md:items-center text-center md:space-x-6 ${!navbarOpen ? 'hidden' : 'flex'}`}>
              <Link
                href="/verifyproduct"
                className="px-6 py-4 ml-4 bg-white text-purple-500 border-2 border-purple-500 font-semibold text-lg rounded-xl hover:bg-purple-500 hover:text-white transition ease-in-out duration-500 mb-5 md:mb-0"
              >
                Qchek Now
              </Link>
              <Link
                href="/register"
                className="px-6 py-4 border-2 border-purple-500 text-purple-500 font-semibold text-lg rounded-xl hover:bg-purple-500 hover:text-white transition ease-linear duration-500"
              >
                Become a manufacturer
              </Link>
            </div>
          </nav>
          <div className="flex mt-8 flex-col lg:flex-row justify-between md:space-x-20 md:gap-0 gap-8">
            <div className="text-center lg:text-left mt-40">
              <h1 className="font-semibold text-gray-900 text-3xl md:text-6xl leading-normal mb-6">
                Empowering Trust <br /> Securing Health
              </h1>
              <p className="font-light text-gray-400 text-md md:text-lg leading-normal mb-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit
              </p>
             <button className='bg-purple-500 text-white h-14 w-1/2 shadow-xl font-bold'>Get Started</button>
            </div>
            <div className="md:w-1/2 w-full ">
            <Image src={HomeImage} alt="Image"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
