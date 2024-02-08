import React from 'react'
import Random from "./components/Random"
import Tag from "./components/Tag"

const App = () => {
  return (
    <div className='w-full h-screen flex flex-col background fixed overflow-x-hidden items-center'>
      <h1 className='bg-neutral-400 rounded-md text-center font-serif text-3xl font-bold mt-6 w-11/12'>RANDOM GIFS</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
        <Random></Random>
        <Tag></Tag>
      </div>
   
    </div>
  )
}

export default App

