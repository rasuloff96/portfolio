import React from 'react'

const Home = () => {
  return (
    <div className='w-full flex gap-2'>
      <div className='bg-slate-800 text-white w-1/2 h-auto rounded p-3'>
        <h2>Asilbek Rasulov</h2>
        <p>Assalamu Alaykum. Shaxsiy Portfolioga xush kelibsiz. Bu yerda siz men haqimda malumot olishingiz mumkun va bundan tashqari men bilan bog'lanishingiz va mening ishlarimni korib chiqishingiz mumkun!!!</p>
        
      </div>

      <div className='w-1/2 text-white flex flex-col gap-2 h-auto'>

        <div className='p-3 bg-slate-800  rounded'> <p>My skills</p> </div>
        <div className='p-3 bg-slate-800  rounded'> <p>contact with me</p> </div>

      </div>
    </div>
  )
}

export default Home