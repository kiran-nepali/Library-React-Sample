import React from 'react'


export const Book =({title,author,pages,bookmark}) =>{
  return(
    <section>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{pages} pages</p>
      <p>Free bookmark: {bookmark?"yes":"no"}</p>
    </section>
  )
}
