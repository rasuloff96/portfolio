import React from 'react'

const Home = () => {
  return (
    <div className='w-full flex gap-2'>
      <div className='bg-slate-800 text-white w-1/2 h-auto rounded p-3'>
        <h2>Asilbek Rasulov</h2>
        <p>Bu yerda matin bolishi kerag</p>
        
      </div>

      <div className='w-1/2 text-white flex flex-col gap-2 h-auto'>

        <div className='p-3 bg-slate-800  rounded'> <p>My skills</p> </div>
        <div className='p-3 bg-slate-800  rounded'> <p>contact with me</p> </div>

      </div>
    </div>
  )
}

export default Home