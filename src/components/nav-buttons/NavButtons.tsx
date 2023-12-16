'use client'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const NavButtons: FC = () => {
  const router = useRouter()
  return (
    <div className="flex gap-2">
      <span
        onClick={() => router.back()}
        className="p-1 bg-black cursor-pointer flex justify-center items-center rounded-full"
      >
        <IoIosArrowBack size={25} color="white" />
      </span>
      <span
        onClick={() => router.forward()}
        className="p-1 bg-black cursor-pointer flex justify-center items-center rounded-full"
      >
        <IoIosArrowForward size={25} color="white" />
      </span>
    </div>
  )
}

export default NavButtons
