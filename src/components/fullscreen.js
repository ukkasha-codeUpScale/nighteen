import React,{useState} from 'react'

export default function Fullscreen() {
    const[open, setOpen] = useState(false);
  return (
    <nav>
        <div className='w-11/12 flex justify-end items-center'>
            <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform trasition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5":""}`} />
            <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform trasition duration-300 ease-in-out ${open ? "w-0":"w-full"}`} />
            <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform trasition duration-300 ease-in-out ${open ? "rotate-45 -translate-y-2.5":""}`} />
        </div>
    </nav>
  )
}
