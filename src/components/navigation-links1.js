import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links1.css'

const NavigationLinks1 = (props) => {
  return (
    <nav className={`navigation-links1-nav ${props.rootClassName} `}>
      <span className="navigation-links1-text">{props.text}</span>
      <span className="navigation-links1-text1">{props.text1}</span>
      <span className="navigation-links1-text2">{props.text2}</span>
      <span className="navigation-links1-text3">{props.text3}</span>
    </nav>
  )
}

NavigationLinks1.defaultProps = {
  text3: '법률자문',
  text2: '프리미엄',
  text: 'About',
  rootClassName: '',
  text1: '갤러리',
  text4: 'Blog',
}

NavigationLinks1.propTypes = {
  text3: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
}

export default NavigationLinks1
