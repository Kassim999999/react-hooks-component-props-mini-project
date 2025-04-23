import React from 'react'
import blogData from '../data/blog'
import Article from './Article'

const ArticleList = () => {
  return (
    <main>
     {blogData.posts.map(({id, title, date = "January 1,1970", preview, minutes})=> {
          <article key={id}>
            <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
          </article>
     })}
     <Article/>
    </main>
  )
}

export default ArticleList