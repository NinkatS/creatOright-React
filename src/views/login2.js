import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './login2.css'

const Login2 = (props) => {
  return (
    <div className="login2-container">
      <Helmet>
        <title>login2 - creatOright</title>
        <meta property="og:title" content="login2 - creatOright" />
      </Helmet>
      <Header rootClassName="header-root-class-name6"></Header>
      <div className="login2-signinformwhite">
        <div className="login2-column">
          <div className="login2-content">
            <div className="login2-section-title">
              <span className="login2-text">Welcome back</span>
              <span className="login2-text01">
                <span>Please enter your contact details to connect.</span>
              </span>
            </div>
            <div className="login2-form">
              <div className="login2-input">
                <span className="login2-text03">
                  <span>Email address</span>
                </span>
                <input
                  type="text"
                  placeholder="name@compagny.com"
                  className="login2-input1"
                />
              </div>
              <div className="login2-input2">
                <span className="login2-text05">
                  <span>Password</span>
                </span>
                <input
                  type="text"
                  placeholder="*********"
                  className="login2-input3"
                />
              </div>
              <div className="login2-content1">
                <div className="login2-frame3">
                  <img
                    src="https://images.unsplash.com/photo-1509624776920-0fac24a9dfda?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxwYWludHxlbnwwfHx8fDE2OTk2NjQyODB8MA&amp;ixlib=rb-4.0.3&amp;w=200"
                    alt="Rectangle11114"
                    className="login2-rectangle1"
                  />
                  <span className="login2-text07">
                    <span>Remember me</span>
                  </span>
                </div>
                <span className="login2-text09">
                  <span>Forgot password</span>
                </span>
              </div>
              <button className="login2-buttons">
                <button className="login2-button">
                  <span className="login2-text11">Log in</span>
                </button>
                <button className="login2-button1">
                  <img
                    src="/external/flatcoloriconsgoogle107-79lr.svg"
                    alt="flatcoloriconsgoogle107"
                    className="login2-flatcoloriconsgoogle"
                  />
                  <span className="login2-text12">
                    <span>Log in with Google</span>
                  </span>
                </button>
              </button>
              <div className="login2-content2">
                <span className="login2-text14">아직 회원이 아니신가요?</span>
                <Link to="/register" className="login2-text15">
                  회원가입
                </Link>
              </div>
            </div>
          </div>
          <div className="login2-footer">
            <span className="login2-text16 TextRegularNormal">
              <span>© 2022 Relume</span>
            </span>
          </div>
        </div>
        <div className="login2-frame1">
          <img
            src="https://images.unsplash.com/photo-1558452337-ca6e53836504?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDUxfHxwYWludHxlbnwwfHx8fDE2OTk2NjQzNTZ8MA&amp;ixlib=rb-4.0.3&amp;w=800"
            alt="PlaceholderImage1115"
            loading="lazy"
            className="login2-placeholder-image"
          />
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Login2
