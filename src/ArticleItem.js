import React from 'react'

function ArticleItem(props){

  const className = `card ${props.mode}`;

  return (
    <div className={className}>
      <strong>{props.title}</strong>
    </div>
  )
}

export default ArticleItem