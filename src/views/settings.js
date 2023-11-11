import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './settings.css'

const Settings = (props) => {
  return (
    <div className="settings-container">
      <Helmet>
        <title>Settings - creatOright</title>
        <meta property="og:title" content="Settings - creatOright" />
      </Helmet>
      <Header rootClassName="header-root-class-name4"></Header>
      <div className="settings-i-phone141">
        <div className="settings-frame2">
          <img src alt="Rectangle4361" className="settings-rectangle4" />
          <img src alt="Rectangle7365" className="settings-rectangle7" />
          <img src alt="Rectangle6364" className="settings-rectangle6" />
          <img src alt="Rectangle8366" className="settings-rectangle8" />
          <img src alt="Rectangle5362" className="settings-rectangle5" />
          <img src alt="Rectangle9367" className="settings-rectangle9" />
        </div>
        <img
          src="/external/rectangle2321-10nf.svg"
          alt="Rectangle2321"
          className="settings-rectangle2"
        />
        <div className="settings-group2">
          <img
            src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDk3fHxwZW9wbGV8ZW58MHx8fHwxNjk5NjYzMzczfDA&amp;ixlib=rb-4.0.3&amp;w=200"
            alt="Ellipse2322"
            loading="eager"
            className="settings-ellipse2"
          />
        </div>
        <span className="settings-text">
          <span>Melissa peters</span>
        </span>
        <span className="settings-text02">
          <span>
            <span>Interior designer</span>
            <br></br>
            <span></span>
          </span>
        </span>
        <div className="settings-group3">
          <img
            src="/external/materialsymbolslocationon329-0fyb.svg"
            alt="materialsymbolslocationon329"
            className="settings-materialsymbolslocationon"
          />
          <span className="settings-text07">
            <span>Lagos, Nigeria</span>
          </span>
        </div>
        <div className="settings-group7">
          <div className="settings-group4">
            <span className="settings-text09">
              <span>122</span>
            </span>
            <span className="settings-text11">
              <span>followers</span>
            </span>
          </div>
          <div className="settings-group6">
            <span className="settings-text13">
              <span>37K</span>
            </span>
            <span className="settings-text15">
              <span>likes</span>
            </span>
          </div>
          <div className="settings-group5">
            <span className="settings-text17">
              <span>67</span>
            </span>
            <span className="settings-text19">
              <span>following</span>
            </span>
          </div>
        </div>
        <span className="settings-text21">
          <span>Photos</span>
        </span>
        <span className="settings-text23">
          <span>Likes</span>
        </span>
        <div className="settings-group10">
          <div className="settings-group8">
            <span className="settings-text25">
              <span>Edit profile</span>
            </span>
          </div>
          <div className="settings-group9">
            <div className="settings-frame1">
              <span className="settings-text27">
                <span>Add friends</span>
              </span>
            </div>
          </div>
        </div>
        <img
          src="/external/line1363-828.svg"
          alt="Line1363"
          className="settings-line1"
        />
      </div>
    </div>
  )
}

export default Settings
