import React from 'react'
import Search from './Search'
import Users from './Users'

function Left() {
  return (
    <div className='text-gray-300 w-[30%] bg-black'>
      <Search/>
      <Users/>
    </div>
  )
}

export default Left
