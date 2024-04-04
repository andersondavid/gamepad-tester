import React from 'react'

export default function AxesGraphic() {
  return (
    <div className='relative -translate-x-20 -translate-y-20'>
      <div className='box-border w-40 h-40 rounded-full border-4 border-gray-200'></div>
      <span className='absolute w-5 h-5 bg-orange-500 rounded-full top-[70px] left-[70px]'></span>
    </div>
  )
}
