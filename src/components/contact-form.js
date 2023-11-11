import React from 'react'

import PropTypes from 'prop-types'

import './contact-form.css'

const ContactForm = (props) => {
  return (
    <div className="contact-form-cta">
      <div className="contact-form-form-element">
        <span className="contact-form-text Bodydefault">
          <span className="contact-form-text01">Your Name*</span>
        </span>
      </div>
      <div className="contact-form-form-element1">
        <span className="contact-form-text02 Bodydefault">
          <span className="contact-form-text03">Reason for Contacting*</span>
        </span>
        <img
          src={props.icroundarrowdropdowncircle_src}
          alt={props.icroundarrowdropdowncircle_alt}
          className="contact-form-icroundarrowdropdowncircle"
        />
      </div>
      <div className="contact-form-form-element2">
        <span className="contact-form-text04 Bodydefault">
          <span className="contact-form-text05">Email*</span>
        </span>
      </div>
      <div className="contact-form-form-element3">
        <span className="contact-form-text06 Bodydefault">
          <span>Phone</span>
        </span>
      </div>
      <div className="contact-form-form-element4">
        <span className="contact-form-text08 Bodydefault">
          <span>Message</span>
        </span>
      </div>
      <span className="contact-form-text10 Heading4">
        <span>What can us do for you?</span>
      </span>
      <span className="contact-form-text12 Bodymedium">
        <span>
          We are ready to work on a project of any complexity, whether it’s
          commercial or residential.
        </span>
      </span>
      <button className="contact-form-button">
        <span className="contact-form-text14">
          <span>Submit</span>
        </span>
      </button>
      <span className="contact-form-text16 Caption">
        <span className="contact-form-text17">*</span>
        <span className="contact-form-text18">
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span>indicates a required field</span>
      </span>
    </div>
  )
}

ContactForm.defaultProps = {
  icroundarrowdropdowncircle_src:
    '/external/icroundarrowdropdowncirclei342-tld.svg',
  icroundarrowdropdowncircle_alt: 'icroundarrowdropdowncircleI342',
}

ContactForm.propTypes = {
  icroundarrowdropdowncircle_src: PropTypes.string,
  icroundarrowdropdowncircle_alt: PropTypes.string,
}

export default ContactForm
