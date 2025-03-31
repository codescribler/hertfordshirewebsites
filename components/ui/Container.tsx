import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: 'default' | 'sm' | 'lg' | 'xl' | 'full' | 'apple';
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, as: Component = 'div', size = 'default', children, ...props }, ref) => {
    const sizeClasses = {
      sm: 'max-w-4xl',
      default: 'max-w-6xl',
      lg: 'max-w-7xl',
      xl: 'max-w-screen-2xl',
      apple: 'max-w-apple-section',
      full: 'max-w-full',
    };

    return (
      <Component
        ref={ref}
        className={cn(
          'container mx-auto px-6 sm:px-8 lg:px-10',
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = 'Container';

export { Container };
