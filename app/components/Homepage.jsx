"use client"

import React, { useState, useEffect } from 'react'
import Loading from '../loading'
import Header from './Header'
import Middle from './Middle'

function Homepage() {
  const [isloading, setIsloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false)
    }, 1000);
  }
    ,)

  return (
    <>
      {isloading ? <Loading /> : <>        <Header />
        <Middle />
         </>}

    </>
  )
}

export default Homepage