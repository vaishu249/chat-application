import React from 'react'
import { IoSendSharp, IoToggleSharp } from "react-icons/io5";

function Typesend() {
    return (
        <div className='flex space-x-1 h-[8vh] bg-slate-700'>
            <div className='w-[90%] mx-4'>
                <input type="text" placeholder="Type here" className="border border-gray-900 rounded-xl outline-none px-4 py-3 mt-1 w-full bg-slate-800" />
            </div>
            <button className='text-3xl'><IoSendSharp/></button>
        </div>
    )
}

export default Typesend
