import React from 'react'

const Header = ({blog}) => {
  return (
    <header>
        <h1>{blog.name}</h1>
    </header>
  )
}

export default Header