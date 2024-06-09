'use client';
import clsx from 'clsx';
import { LucideIcon } from 'lucide-react';
import { InputHTMLAttributes, forwardRef } from 'react';

export interface IField extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  Icon?: LucideIcon;
  error?: string;
}

const Field = forwardRef<HTMLInputElement, IField>(
  (
    { placeholder, error, className, type = 'text', style, Icon, ...rest },
    ref
  ) => {
    const isReadOnly = rest.readOnly || false;
    return (
      <div className={className} style={style}>
        <label>
          <span className="absolute z-[1] text-white -mt-5 text-sm justify-center flex items-center ml-2 px-2">
            {Icon && <Icon size={18} color="white" className="mr-1.5" />}
            {placeholder}
          </span>
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            {...rest}
            className={clsx(
              'px-4 rounded-md py-3 focus:outline-none text-sm border-zinc-700 bg-[#1e1e1e] w-full my-1 border-2 transition focus:border-white',
              { 'border-custom appearance-none': !!error },
              {
                ['border-x-2 border-t-2 border-[#3d3d3d] focus:border-black']:
                  isReadOnly,
              }
            )}
          />
        </label>
        {error ? (
          <div className="text-green-500 text-sm z-50">{error}</div>
        ) : (
          <div className="h-5"></div>
        )}
      </div>
    );
  }
);

Field.displayName = 'Field';

export default Field;
