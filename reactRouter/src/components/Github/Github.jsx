import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const dataload = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    // fetch('https://api.github.com/users/balkrishnaray')
    // .then(response => response.json())
    // .then(data => {
    // console.log(data);
    // setData(data);
    // })
    // }, [])
    
  return (
    <div className='text-center text-white text-3xl px-4 bg-gray-600'>Github Followers: {dataload.followers}
    <img src = {dataload.avatar_url} alt='git picture' />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/balkrishnaray')
  return response.json()
}