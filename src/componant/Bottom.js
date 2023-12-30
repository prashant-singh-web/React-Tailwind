import React from 'react'
import Bottom1 from './Bottom_component/Bottom1'



function Bottom() {
  return (
    <div className='w-full flex flex-col'>
       <p className='w-full text-center py-8 capitalize text-2xl font-bold text-violet-700 bg-white my-2'>bottom component</p>
        
       <Bottom1/>
        </div>
  )
}

export default Bottom