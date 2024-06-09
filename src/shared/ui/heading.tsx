import * as React from 'react';

import { cn } from '@/shared/lib/utils';

export interface HeadingProps
  extends React.InputHTMLAttributes<HTMLHeadingElement> {}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, type, children, ...props }, ref) => {
    return (
      <h1
        className={cn('text-2xl font-bold mb-4', className)}
        ref={ref}
        {...props}
      >
        {children}
      </h1>
    );
  }
);
Heading.displayName = 'Heading';

export { Heading };
