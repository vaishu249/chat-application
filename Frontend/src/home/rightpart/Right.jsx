import React from 'react'
import Chatuser from './Chatuser';
import Messages from './Messages';
import Typesend from './Typesend';

function Right() {
  return (
    <div className='text-gray-300 w-[70%] bg-slate-800'>
      <Chatuser/>
      <Messages/>
      <Typesend/>
    </div>
  )
}

export default Right;
