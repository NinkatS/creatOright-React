import React from 'react'

import PropTypes from 'prop-types'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <form className="login-form">
        <span className="login-text Heading">{props.text1}</span>
        <input
          type="text"
          placeholder={props.textinput_placeholder1}
          className="login-textinput input"
        />
        <input
          type="text"
          placeholder={props.textinput_placeholder11}
          className="login-textinput1 input"
        />
      </form>
    </div>
  )
}

Login.defaultProps = {
  text: 'Link',
  link_text: 'https://example.com',
  text1: '로그인',
  textinput_placeholder11: 'placeholder',
  textinput_placeholder1: 'placeholder',
  textinput_placeholder: 'placeholder',
}

Login.propTypes = {
  text: PropTypes.string,
  link_text: PropTypes.string,
  text1: PropTypes.string,
  textinput_placeholder11: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default Login
