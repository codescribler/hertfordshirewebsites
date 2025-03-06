import React from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-apple text-base font-medium transition-all duration-400 ease-apple focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-primary-800 text-white hover:bg-primary-700 hover:shadow-sm',
        secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 hover:shadow-sm',
        accent: 'bg-accent-500 text-white hover:bg-accent-600 hover:shadow-sm',
        outline: 'border border-primary-300 text-primary-800 hover:bg-primary-50',
        ghost: 'text-primary-800 hover:bg-primary-50',
        link: 'text-secondary-500 hover:text-secondary-600 underline-offset-4 hover:underline',
        'link-dark': 'text-primary-800 hover:text-primary-600 underline-offset-4 hover:underline',
        'apple-primary': 'bg-secondary-500 text-white hover:bg-secondary-600 hover:shadow-sm',
        'apple-secondary': 'bg-primary-50 text-secondary-500 hover:bg-primary-100'
      },
      size: {
        default: 'h-11 py-2.5 px-5',
        sm: 'h-9 py-2 px-4 text-sm rounded-apple',
        lg: 'h-12 py-3 px-8 text-base',
        xl: 'h-14 py-3.5 px-10 text-lg'
      },
      fullWidth: {
        true: 'w-full'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      fullWidth: false
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant,
    size,
    fullWidth,
    href,
    external,
    icon,
    iconPosition = 'right',
    children,
    ...props
  }, ref) => {
    const buttonContent = (
      <>
        {icon && iconPosition === 'left' && (
          <span className="mr-2 flex items-center">{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span className="ml-2 flex items-center">{icon}</span>
        )}
      </>
    );

    if (href) {
      return external ? (
        <a
          href={href}
          className={buttonVariants({ variant, size, fullWidth, className })}
          target="_blank"
          rel="noopener noreferrer"
        >
          {buttonContent}
        </a>
      ) : (
        <Link
          href={href}
          className={buttonVariants({ variant, size, fullWidth, className })}
        >
          {buttonContent}
        </Link>
      );
    }

    return (
      <button
        className={buttonVariants({ variant, size, fullWidth, className })}
        ref={ref}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
