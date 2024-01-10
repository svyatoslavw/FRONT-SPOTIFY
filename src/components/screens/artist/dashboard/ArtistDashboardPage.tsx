'use client'
import { useProfile } from '@/hooks/useProfile'
import { IUser } from '@/types/user.types'
import { useDisclosure } from '@nextui-org/react'
import Image from 'next/image'
import CreateTrackModal from './CreateTrackModal'

const ArtistDashboardPage = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
  const { profile } = useProfile()
  if (!profile) return null

  return (
    <>
      <div className="h-[95vh]">
        <div className="flex w-full h-[100px] cursor-default bg-secondary/90 shadow-md shadow-secondary justify-center text-4xl font-bold items-center">
          Artist card
        </div>
        <div className="py-5 px-3 flex gap-3">
          <div className="w-full py-2 rounded-xl bg-primary flex gap-7 px-5 items-center shadow-md">
            <Image
              src={profile.image}
              draggable={false}
              className="text-sm font-semibold rounded-full"
              width={90}
              height={90}
              alt="/"
            />
            <p className="text-xl tracking-tight font-black items-end">{profile.name}</p>
          </div>
          <div className="flex flex-col w-1/3 gap-3">
            <button
              onClick={onOpen}
              className="w-full h-full shadow-md py-3 rounded-xl bg-primary flex gap-7 px-5 items-center text-sm font-medium justify-center hover:bg-gray transition-all"
            >
              Add track
            </button>
            <button className="w-full h-full shadow-md py-3 rounded-xl bg-primary flex gap-7 px-5 items-center text-sm font-medium justify-center hover:bg-gray transition-all">
              Add album
            </button>
          </div>
        </div>
        <div className=" px-3">
          <h1 className="text-3xl text-center mb-5 font-semibold text-default-700">Your tracks</h1>
          <div className="grid grid-cols-2 gap-3">
            {profile.tracks.map((track) => (
              <div className="rounded-lg bg-gray shadow-md flex gap-7 px-4 py-2 items-center">
                <Image
                  src={track.image}
                  draggable={false}
                  className="text-sm font-semibold rounded-full"
                  width={50}
                  height={50}
                  alt="/"
                />
                <p className="text-sm tracking-tight font-medium items-end">{track.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CreateTrackModal
        profile={profile as IUser}
        onClose={onClose}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </>
  )
}

export default ArtistDashboardPage
