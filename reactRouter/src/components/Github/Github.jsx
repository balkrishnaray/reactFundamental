import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
    fetch('https://api.github.com/users/balkrishnaray')
    .then(response => response.json())
    .then(data => {
    console.log(data);
    setData(data);
    })
    }, [])
    
  return (
    <div className='text-center text-white text-3xl px-4 bg-gray-600'>Github Followers: {data.followers}
    <img src = {data.avatar_url} alt='git picture' />
    </div>
  )
}

export default Github