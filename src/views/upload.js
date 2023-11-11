import React from 'react'

import { Helmet } from 'react-helmet'

import './upload.css'

const Upload = (props) => {
  return (
    <div className="upload-container">
      <Helmet>
        <title>Upload - creatOright</title>
        <meta property="og:title" content="Upload - creatOright" />
      </Helmet>
    </div>
  )
}

export default Upload
