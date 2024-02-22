import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 px-4 text-white text-2xl text-center'>User:{userid}</div>
  )
}

export default User