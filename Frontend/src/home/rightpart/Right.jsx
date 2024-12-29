import React from 'react'
import Chatuser from './Chatuser';
import Messages from './Messages';
import Typesend from './Typesend';

function Right() {
  return (
    <div className='text-gray-300 w-[70%] bg-slate-800'>
      <Chatuser/>
      <div className='flex-1 overflow-y-auto' style={{maxHeight:"calc(92vh - 8vh)"}}>
        <Messages/>
      </div>
      <Typesend/>
    </div>
  )
}

export default Right;
