import React from 'react'

function StyleCard({title, image_url}) {
  const divClassName = `w-full h-[200px] px-8 py-5 bg-[url('${ image_url }')] bg-cover bg-center bg-no-repeat rounded-[25px]`
  return (
    <div className={divClassName}>
        <p className='text-4xl lg:text-6xl'>{ title }</p>
    </div>
  )
}

export default StyleCard