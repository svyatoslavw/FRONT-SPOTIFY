import { User } from '@/__generated__/ggl/graphql';
import { average } from 'color.js';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface IUserCardProps {
  profile: User;
  children?: React.ReactNode;
}

const UserCard = ({ profile, children }: IUserCardProps) => {
  const [color, setColor] = useState<string>('');
  useEffect(() => {
    if (profile) {
      average(profile.image)
        .then((result: any) => {
          setColor(result);
        })
        .catch((error) => {
          console.error('Error calculating color:', error);
        });
    }
    console.log(color);
  }, [profile]);

  return (
    <div
      style={{
        background: `linear-gradient(to bottom, rgba(${color}, 1), rgba(${color}, 0.05))`,
      }}
      className="rounded-t-lg rounded-r-lg"
    >
      {children}
      <>
        <div className="w-full h-[270px] flex gap-7 px-4 items-center">
          <Image
            src={profile.image}
            draggable={false}
            className="text-sm font-semibold aspect-square rounded-full"
            width={230}
            height={230}
            alt="/"
          />
          <div>
            <div className="flex my-2 items-center justify-between">
              <p className="text-sm cursor-default">Profile</p>
              {profile.premium && (
                <span className="text-center px-5 w-32 py-1 rounded-full bg-secondary/50 hover:bg-secondary/80 text-black text-sm cursor-default transition-all duration-500 bg-gradient-to-tl from-emerald-700 via-green-400 to-secondary/80 bg-size-200 bg-pos-0 hover:bg-pos-100">
                  Premium
                </span>
              )}
            </div>
            <p className="text-8xl tracking-tighter font-black">
              {profile.name}
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export { UserCard };
