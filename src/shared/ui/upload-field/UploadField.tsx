import { AudioLines, ImageIcon } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';
import { useUploadFile } from './useUploadFile';

export interface IUploadField {
  onChange: (value: string) => void;
  value?: string;
  defaultValue?: string;
  file?: boolean;
}

const UploadField: FC<IUploadField> = ({
  value,
  onChange,
  defaultValue,
  file,
}) => {
  const { uploadFile } = useUploadFile(onChange);
  console.log(value);
  return (
    <div className="w-full shadow my-8">
      <h1 className="text-sm font-semibold mb-2 text-white flex items-center ml-2 px-2">
        {<ImageIcon size={18} color="white" className="mr-1.5" />}
        Choose File
      </h1>

      <label className="flex items-center justify-center gap-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {value ? (
          file ? (
            <AudioLines size={118} className="object-cover" />
          ) : (
            <Image
              src={value}
              alt="ssss"
              width={40}
              height={40}
              className="object-cover"
            />
          )
        ) : defaultValue ? (
          <Image
            src={defaultValue}
            alt="ssss"
            width={40}
            height={40}
            className="object-cover"
          />
        ) : (
          <AudioLines size={54} className="object-cover text-white" />
        )}
        <span className="sr-only block">Choose File</span>
        <input
          type="file"
          onChange={uploadFile}
          className="px-4 py-1 cursor-pointer block text-sm border-gray border rounded-md bg-[#1e1e1e] w-full text-white file:mr-4 file:py-2 file:px-2 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#1e1e1e] file:bg-opacity-20 file:text-[#3f3f3f] file:text-opacity-80"
        />
      </label>
    </div>
  );
};

export { UploadField };
