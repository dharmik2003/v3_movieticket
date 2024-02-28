import React from 'react'
import Navbar from '../Home/Navbar'
import SitePage from './SitePage'
import Footer from '../Home/Footer'

const SiteHomePage = () => {
  return (
    <div>
        <Navbar/>
        <SitePage/>
        <hr/>
        <Footer/>
    </div>
  )
}

export default SiteHomePage