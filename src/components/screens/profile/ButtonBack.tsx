import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

const ButtonBack = () => {
  return (
    <Link
      href={'overview'}
      className="p-2 flex bg-[#333333] rounded-full hover:scale-105 duration-200 w-[47px] hover:bg-[#262626]"
    >
      <ChevronLeft size={30} color="white" />
    </Link>
  )
}

export default ButtonBack
