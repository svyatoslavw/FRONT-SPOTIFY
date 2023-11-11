'use client'

import Link from 'next/link'
import { FC } from 'react'
import { RxExternalLink } from 'react-icons/rx'

interface IMenuItem {
  href: string
  icon: boolean
  text: string
}

const MenuItem: FC<IMenuItem> = ({ href, icon, text }) => {
  return (
    <Link
      href={href}
      rel={icon ? 'noopener noreferrer' : ''}
      target={icon ? '_blank' : ''}
      className="flex text-white text-[12px] hover:bg-[#3e3e3e] py-2.5 px-3 justify-between cursor-pointer duration-150"
    >
      <span>{text}</span>
      {icon && <RxExternalLink size={18} />}
    </Link>
  )
}

export default MenuItem
