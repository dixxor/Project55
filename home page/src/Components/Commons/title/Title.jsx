import React from 'react'

const Title = ({ subtitle , title }) => {
  return (
    <div>
      <div id='heading'>
        <h1 className='mithi-A'>{subtitle}</h1>
        <h1 className='mithi'>{title}</h1>
      </div>
    </div>
  )
}

export default Title
