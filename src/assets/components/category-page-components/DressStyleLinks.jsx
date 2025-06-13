import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, ChevronUp, ChevronDown } from 'lucide-react'

function DressStyleLinks() {
    const [visible, setVisible] = useState(true);

    const handleVisibility = () => {
        setVisible(!visible)
    }

    return (
        <div className='flex flex-col gap-2 mb-4'>
            <div className="flex flex-row justify-between">
                <p className="font-bold text-2xl">Dress Style</p>
                {visible && <button onClick={handleVisibility}><ChevronUp /></button>}
                {!visible && <button onClick={handleVisibility}><ChevronDown /></button>}
            </div>
            { visible && 
                <>
                <Link to="/category?style=Casual" className='flex flex-row items-center justify-between opacity-60'>
                    <p>Casual</p>
                    <ChevronRight />
                </Link>
                <Link to="/category?style=Formal" className='flex flex-row items-center justify-between opacity-60'>
                    <p>Formal</p>
                    <ChevronRight />
                </Link>
                <Link to="/category?style=Party" className='flex flex-row items-center justify-between opacity-60'>
                    <p>Party</p>
                    <ChevronRight />
                </Link>
                <Link to="/category?style=Gym" className='flex flex-row items-center justify-between opacity-60'>
                    <p>Gym</p>
                    <ChevronRight />
                </Link>
                </>
            }
        </div>
      )
}

export default DressStyleLinks