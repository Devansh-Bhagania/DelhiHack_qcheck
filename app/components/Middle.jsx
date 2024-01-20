import React from 'react'
import Verified from '../../public/verified-bro.svg'
import Image from 'next/image';

const Middle = () => {
  return (
<div>
  <section className="bg-white py-16">
    <div className="container max-w-screen-xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-between space-x-16">
        <div className="flex w-1/2 justify-center lg:justify-start ">
          <Image src={Verified} alt="Image" />
        </div>
        <div className="mt-16">
          <h1 className="font-semibold text-purple-700 text-xl md:text-4xl mb-20">Verify Your Meds with <br /> one click </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-20 mb-16">
            <div className="mb-5 md:mb-0">
              <div className="w-20 py-6 flex justify-center bg-info bg-opacity-5 rounded-xl mb-4">
                <i data-feather="sun" className="text-info" />
              </div>
              <h3 className="font-semibold text-purple-700 text-xl md:text-3xl mb-4">10000+</h3>
                <p className="font-light text-purple-600 text-md md:text-lg">Trusted <br /> Companies</p>
            </div>
            <div>
              <div className="w-20 py-6 flex justify-center bg-red-500 bg-opacity-5 rounded-xl mb-4">
                <i data-feather="award" className="text-red-500" />
              </div>
              <h3 className="font-semibold text-purple-700 text-xl md:text-3xl mb-4">20M+</h3>
              <p className="font-light text-purple-600 text-md md:text-lg">Users <br />Worldwide </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-20">
            <div className="mb-5 md:mb-0">
              <div className="w-20 py-6 flex justify-center bg-yellow-500 bg-opacity-5 rounded-xl mb-4">
                <i data-feather="users" className="text-yellow-500" />
              </div>
              <h3 className="font-semibold text-purple-700 text-xl md:text-3xl mb-4">1200+</h3>
              <p className="font-light text-purple-600 text-md md:text-lg">ADR <br /> Reports</p>
            </div>
            <div>
              <div className="w-20 py-6 flex justify-center bg-green-500 bg-opacity-5 rounded-xl mb-4">
                <i data-feather="trending-up" className="text-green-500" />
              </div>
              <h3 className="font-semibold text-purple-700 text-xl md:text-3xl mb-4">98%</h3>
              <p className="font-light text-purple-600 text-md md:text-lg">Accuracy<br /> from blockchain</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default Middle