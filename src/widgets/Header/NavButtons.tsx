import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

const NavButtons: FC = () => {
  const router = useRouter();
  return (
    <div className="flex gap-2">
      <span
        onClick={() => router.back()}
        className="p-1 bg-black cursor-pointer flex justify-center items-center aspect-square rounded-full hover:scale-125 transition"
      >
        <ChevronLeft size={25} color="white" />
      </span>
      <span
        onClick={() => router.forward()}
        className="p-1 bg-black cursor-pointer flex justify-center items-center rounded-full hover:scale-125 transition"
      >
        <ChevronRight size={25} color="white" />
      </span>
    </div>
  );
};

export default NavButtons;
