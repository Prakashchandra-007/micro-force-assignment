import React from 'react'
import DisplayArea from '../display-area/DisplayArea';
import Footer from '../footer/Footer'
import Header from '../header/Header';
function Main() {
  return (
    <div style={{height: '100vh'}}><Header />
    <DisplayArea />
    <Footer />
    </div>
  )
}

export default Main