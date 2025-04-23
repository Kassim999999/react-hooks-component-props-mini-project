import React from 'react'

const Header = ({blog = {name: "Default Blog Name"}}) => {
  return (
    <header>
        <h1>{blog.name}</h1>
    </header>
  )
}

export default Header