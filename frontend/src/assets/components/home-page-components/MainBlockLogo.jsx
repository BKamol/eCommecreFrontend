import React from 'react'

function MainBlockLogo() {
  return (
    <div className='bg-black flex flex-row gap-8 py-8 flex-wrap items-center justify-center sm:justify-between sm:px-10 lg:px-16'>
        <img className='scale-80 sm:scale-100' src="\images\Versace.svg" alt="Versace" />
        <img className='scale-80 sm:scale-100' src="\images\Zara.svg" alt="Zara" />
        <img className='scale-80 sm:scale-100' src="\images\Gucci.svg" alt="Gucci" />
        <img className='scale-80 sm:scale-100' src="\images\Prada.svg" alt="Prada" />
        <img className='scale-80 sm:scale-100' src="\images\CalvinKlein.svg" alt="CalvinKlein" />
    </div>
  )
}

export default MainBlockLogo