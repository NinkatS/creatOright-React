import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import GalleryCard1 from '../components/gallery-card1'
import Footer from '../components/footer'
import './account.css'

const Account = (props) => {
  return (
    <div className="account-container">
      <Helmet>
        <title>Account - creatOright</title>
        <meta property="og:title" content="Account - creatOright" />
      </Helmet>
      <Header rootClassName="header-root-class-name2"></Header>
      <div className="account-testimonial">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;w=300"
          className="account-image"
        />
        <div className="account-container1">
          <span className="account-text">
            <span>following</span>
          </span>
          <div className="account-testimonial1">
            <div className="account-container2"></div>
          </div>
          <span className="account-text02">
            <span>followers</span>
          </span>
          <span className="account-text04">
            <span>likes</span>
          </span>
        </div>
        <span className="account-text06">
          <span></span>
          <span></span>
          <span>Jane Doe</span>
          <span></span>
        </span>
        <span className="account-text11">
          <span className="account-text12">Software Engineer</span>
        </span>
        <div className="account-group7">
          <div className="account-group4">
            <span className="account-text13">
              <span>122</span>
            </span>
          </div>
          <div className="account-group6">
            <span className="account-text15">
              <span>37K</span>
            </span>
          </div>
          <div className="account-group5">
            <span className="account-text17">
              <span>67</span>
            </span>
          </div>
        </div>
      </div>
      <button type="button" className="account-button button">
        팔로우
      </button>
      <div className="account-gallery">
        <GalleryCard1 rootClassName="rootClassName"></GalleryCard1>
        <GalleryCard1
          image_src="https://images.unsplash.com/photo-1579551053957-ee77f9b970c7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQ2fHx3b29kc3xlbnwwfHx8fDE2MjY0NDc1ODg&amp;ixlib=rb-1.2.1&amp;w=1000"
          rootClassName="rootClassName1"
        ></GalleryCard1>
        <GalleryCard1
          image_src="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHdvb2RzfGVufDB8fHx8MTYyNjQ0NzU3Mw&amp;ixlib=rb-1.2.1&amp;w=1000"
          rootClassName="rootClassName2"
        ></GalleryCard1>
        <GalleryCard1
          image_src="https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxuYXR1cmV8ZW58MHx8fHwxNjI2NDQ3ODAw&amp;ixlib=rb-1.2.1&amp;w=1000"
          rootClassName="rootClassName3"
        ></GalleryCard1>
        <GalleryCard1
          image_src="https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxuYXR1cmV8ZW58MHx8fHwxNjI2NDQ3ODAw&amp;ixlib=rb-1.2.1&amp;w=1000"
          rootClassName="rootClassName6"
        ></GalleryCard1>
        <GalleryCard1
          image_src="https://images.unsplash.com/photo-1529948723647-8b7bd77b441c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxjbGlmZnxlbnwwfHx8fDE2MjY0NDc4MjQ&amp;ixlib=rb-1.2.1&amp;w=1000"
          rootClassName="rootClassName4"
        ></GalleryCard1>
        <GalleryCard1
          image_src="https://images.unsplash.com/photo-1553570739-330b8db8a925?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxvY2VhbnxlbnwwfHx8fDE2MjY0NDc4ODQ&amp;ixlib=rb-1.2.1&amp;w=1000"
          rootClassName="rootClassName5"
        ></GalleryCard1>
        <GalleryCard1
          image_src="https://images.unsplash.com/photo-1529948723647-8b7bd77b441c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxjbGlmZnxlbnwwfHx8fDE2MjY0NDc4MjQ&amp;ixlib=rb-1.2.1&amp;w=1000"
          rootClassName="rootClassName7"
        ></GalleryCard1>
        <GalleryCard1
          image_src="https://images.unsplash.com/photo-1553570739-330b8db8a925?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxvY2VhbnxlbnwwfHx8fDE2MjY0NDc4ODQ&amp;ixlib=rb-1.2.1&amp;w=1000"
          rootClassName="rootClassName8"
        ></GalleryCard1>
        <span className="account-text19">Artworks</span>
        <span className="account-text20">
          <span>Likes</span>
        </span>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
      <img
        src="/external/line1363-828.svg"
        alt="Line1363"
        className="account-line1"
      />
    </div>
  )
}

export default Account
