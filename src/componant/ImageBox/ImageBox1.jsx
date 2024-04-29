import React, { useState } from 'react'

function ImageBox1() {
    let imgslide = ["/Ironman/iranman_1.jpg","/Ironman/iranman_2.jpg","/Ironman/iranman_3.jpg","/Ironman/iranman_4.jpg","/Ironman/iranman_5.jpg"]
    const [imgUrl, setImgUrl] = useState("/Ironman/iranman_1.jpg")
  return (
    <div className='w-full group min-h-[100vh] rounded overflow-hidden relative'>
        <img src={imgUrl} alt='hii' className='w-full h-[100vh] object-cover'/>
        <div className="absolute inset-0 z-30 grid place-items-end">
            <div className="w-fit flex space-x-3 flex-row mr-20 mb-20">
            {
                imgslide.map((img, i) =>{return(
                    <img src={img} key={i} alt='hii' onClick={()=>setImgUrl(img)} className='w-48 h-36 rounded-sm hidden group-hover:block cursor-pointer duration-200 ease-in-out '/>
                )})
            }
            </div>
        </div>
    </div>
  )
}

export default ImageBox1