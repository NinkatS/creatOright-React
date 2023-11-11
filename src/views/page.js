import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ContactForm from '../components/contact-form'
import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - creatOright</title>
        <meta property="og:title" content="Page - creatOright" />
      </Helmet>
      <Header rootClassName="header-root-class-name5"></Header>
      <ContactForm></ContactForm>
    </div>
  )
}

export default Page
