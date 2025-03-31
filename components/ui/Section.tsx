import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  containerSize?: 'default' | 'sm' | 'lg' | 'xl' | 'full' | 'apple';
  containerClassName?: string;
  noContainer?: boolean;
  spacing?: 'none' | 'sm' | 'default' | 'lg' | 'xl';
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ 
    className, 
    as: Component = 'section', 
    containerSize = 'apple', 
    containerClassName,
    noContainer = false,
    spacing = 'default',
    children, 
    ...props 
  }, ref) => {
    const spacingClasses = {
      none: '',
      sm: 'py-8 md:py-12',
      default: 'py-16 md:py-24 lg:py-30',
      lg: 'py-20 md:py-30 lg:py-36',
      xl: 'py-24 md:py-36 lg:py-44',
    };
    
    return (
      <Component
        ref={ref}
        className={cn(
          spacingClasses[spacing],
          className
        )}
        {...props}
      >
        {noContainer ? (
          children
        ) : (
          <Container size={containerSize} className={containerClassName}>
            {children}
          </Container>
        )}
      </Component>
    );
  }
);

Section.displayName = 'Section';

export { Section };
