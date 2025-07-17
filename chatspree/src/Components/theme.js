import React from 'react'

export default function theme() {
   const handletheme = () => {
      console.log("Theme toggled");
   }
  return (
      <div className='bg-slate-700 h-[3.5rem] w-full flex justify-center items-center'>
         <label htmlFor="check" className="bg-zinc-400 cursor-pointer relative w-16 h-8 mt-6 rounded-full" onClickCapture={handletheme}>
            <input type="checkbox" id="check" className="peer sr-only" />
            <span className="w-1/3 h-3/4 bg-zinc-100 absolute rounded-full left-1 top-1 peer-checked:bg-zinc-800 peer-checked:left-9 transition-all duration-500"></span>
         </label>
      </div>
  )
}
