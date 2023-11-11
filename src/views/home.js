import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FeatureCard from '../components/feature-card'
import GalleryCard3 from '../components/gallery-card3'
import TestimonialCard1 from '../components/testimonial-card1'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>creatOright</title>
        <meta property="og:title" content="creatOright" />
      </Helmet>
      <div className="home-hero">
        <Header rootClassName="header-root-class-name"></Header>
      </div>
      <div className="home-hero1">
        <h1 className="home-text">창작자들을 위해</h1>
        <span className="home-text01">
          &apos;AntI&apos;는 모든 창작자를 보호하고, 창작물의 무단 사용을
          금지합니다.
        </span>
        <div className="home-btn-group">
          <Link to="/login1" className="home-navlink button">
            Get Started
          </Link>
          <button className="home-button button">Learn More</button>
        </div>
      </div>
      <div className="home-details"></div>
      <div className="home-features">
        <div className="home-features-container">
          <div className="home-features1">
            <div className="home-container1">
              <span className="home-text02 sectionTitle">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Unlock the Power of Creation
              </h2>
              <span className="home-features-sub-heading">
                Discover the features that make our platform perfect for artists
                of all levels
              </span>
            </div>
            <div className="home-container2">
              <FeatureCard
                Heading="Upload Drawings"
                SubHeading="Easily upload your own drawings and share them with others"
              ></FeatureCard>
              <FeatureCard
                Heading="View Other People's Drawings"
                SubHeading="Explore a wide range of drawings created by other users"
              ></FeatureCard>
              <FeatureCard
                Heading="Login and Account System"
                SubHeading="Create an account to save and manage your uploaded drawings"
              ></FeatureCard>
              <FeatureCard
                Heading="Interact with Artists"
                SubHeading="Connect with other artists, leave comments, and receive feedback on your work"
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing"></div>
      <div className="home-gallery">
        <div className="home-gallery1">
          <h1 className="home-gallery-heading heading2">
            Explore Amazing Artwork
          </h1>
          <span className="home-gallery-sub-heading">
            Discover a world of creativity and inspiration
          </span>
          <div className="home-container3">
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTUxNDgxNHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1584727638057-78254f636b5a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTUxNDgxNHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTUxNDgxNHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName3"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1578321709315-d0dc844abfe5?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTUxNDgxNHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName2"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1582201957622-3bb35d578ffe?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTUxNDgxNHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName4"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1583341655928-239ca5b819bc?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTUxNDgxNHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName5"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1633420620161-eba80bb373ee?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTUxNDgxNHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName6"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1508139143114-4fb27c19cd29?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTUxNDgxNHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName7"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1614518918123-55d5bea67b11?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTUxNDgxNHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName8"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1578369121695-346a5edfae5a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTUxNDgxNHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName9"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1618913001612-b02bdf3f6638?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTUxNDgxNHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName10"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1583243535987-0cf3da658f43?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTUxNDgxNHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName11"
            ></GalleryCard3>
          </div>
        </div>
      </div>
      <div className="home-banner"></div>
      <div className="home-faq">
        <div className="home-testimonial">
          <div className="home-container4">
            <h1 className="home-text05">
              <span>What they’re saying</span>
              <br></br>
              <span></span>
            </h1>
            <span className="home-text08">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
                dignissim tortor.
              </span>
            </span>
            <div className="home-container5">
              <TestimonialCard1
                picture_src="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName2"
              ></TestimonialCard1>
              <TestimonialCard1 rootClassName="rootClassName"></TestimonialCard1>
              <TestimonialCard1
                picture_src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName1"
              ></TestimonialCard1>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Home
