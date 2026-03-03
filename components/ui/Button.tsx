import React from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-semibold tracking-tight transition-all duration-300 ease-apple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-primary-800 text-white hover:bg-primary-700 shadow-sm hover:shadow-md active:shadow-sm',
        secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 shadow-sm hover:shadow-md active:shadow-sm',
        accent: 'bg-accent-500 text-white hover:bg-accent-600 shadow-md hover:shadow-lg active:shadow-sm',
        outline: 'border-2 border-primary-200 text-primary-800 hover:bg-primary-50 hover:border-primary-300',
        ghost: 'text-primary-800 hover:bg-primary-50',
        link: 'text-secondary-500 hover:text-secondary-600 underline-offset-4 hover:underline',
        'link-dark': 'text-primary-800 hover:text-primary-600 underline-offset-4 hover:underline',
        'apple-primary': 'bg-secondary-500 text-white hover:bg-secondary-600 shadow-md hover:shadow-lg active:shadow-sm',
        'apple-secondary': 'bg-white text-primary-800 border border-primary-200 hover:border-primary-300 hover:bg-primary-50 shadow-sm hover:shadow-md'
      },
      size: {
        default: 'px-6 py-3 text-sm rounded-lg',
        sm: 'px-4 py-2 text-sm rounded-lg',
        lg: 'px-8 py-4 text-base rounded-xl',
        xl: 'px-10 py-5 text-lg rounded-xl'
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
