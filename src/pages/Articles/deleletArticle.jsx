import React from 'react'
import { useParams } from 'react-router-dom'

const DeleletArticle = () => {

const { id } = useParams();
  return (
    <div>
        {id}
        <h1>delete</h1>
    </div>
  )
}

export default DeleletArticle