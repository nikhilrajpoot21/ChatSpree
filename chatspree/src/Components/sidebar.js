import React from 'react'
import Theme from './theme'
import Age from './age'
import Gender from './gender'
import Intrest from './intrest'
import Region from './region'

export default function Sidebar() {
  return (
    <div className='bg-slate-700 h-dvh w-1/6 flex flex-col justify-start items-center'>
      <div className='bg-slate-900 h-[3.5rem] w-full flex justify-center items-center text-slate-500 font-semibold text-[1.8rem]'>
        ChatSpree
      </div>
      <Theme />
      <Gender />
      <Age />
      <Region />
      <Intrest />
    </div>
  );
}

