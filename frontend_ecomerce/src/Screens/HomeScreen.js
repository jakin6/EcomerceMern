import React from 'react'
import Header from '../Components/Header'
import ShopSection from './../Components/homeComponents/ShopSection'
import ContactInfo from './../Components/homeComponents/ContactInfo'
import CallToActionSection from './../Components/homeComponents/CalltoActionSection'
import Footer from './../Components/Footer'
const HomeScreen = () => {
  window.scrollTo(0, 0)
  return (
      <div>
          <Header />
          <ShopSection />
          <CallToActionSection />
          <ContactInfo />
          <Footer/>
        </div>
  )
}

export default HomeScreen