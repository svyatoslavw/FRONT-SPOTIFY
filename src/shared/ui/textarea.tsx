'use client';
import clsx from 'clsx';
import { forwardRef, useState } from 'react';

import { TextareaHTMLAttributes } from 'react';
import { IField } from './input/field';

type TypeTextAreaPropsField = TextareaHTMLAttributes<HTMLTextAreaElement> &
  IField;

export interface ITextArea extends TypeTextAreaPropsField {}

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
  ({ error, className, style, placeholder, ...rest }, ref) => {
    const [text, setText] = useState('');

    const maxLength = 150;
    const handleChange = (e: any) =>
      setText(e.target.value.length <= 150 && e.target.value);
    return (
      <div className={className} style={style}>
        <label>
          <span className="absolute z-[1] border-x border-grayLight border-opacity-50 -mt-3 ml-3 bg-white px-2 rounded-2xl ">
            {placeholder}
          </span>
          <textarea
            ref={ref}
            {...rest}
            maxLength={maxLength}
            spellCheck={false}
            onChange={handleChange}
            className={clsx(
              'px-4 resize-none py-4 h-28 text-base outline-none rounded-xl border-grayLight w-full border-solid border transition focus:border-black',
              { 'border-primary': !!error }
            )}
          />
          <span className="justify-end flex text-sm text-gray-500">
            {text.length}/{maxLength}
          </span>
        </label>
        {error && <div className="text-primary">{error}</div>}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
