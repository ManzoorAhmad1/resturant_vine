'use client'

import { forwardRef } from 'react'
import { motion, MotionProps } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { cn } from '../lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, MotionProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'vineyard'
  size?: 'xs' | 'sm' | 'default' | 'lg' | 'xl' | 'icon'
  isLoading?: boolean
  leftIcon?: LucideIcon
  rightIcon?: LucideIcon
  fullWidth?: boolean
  loadingText?: string
  animation?: 'scale' | 'rotate' | 'float' | 'pulse' | 'none'
  iconOnly?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'default',
      isLoading = false,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      fullWidth = false,
      loadingText,
      animation = 'scale',
      iconOnly = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles = 'inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95'
    
    // Variants
    const variants = {
      default: 'bg-accent-primary text-white shadow-lg hover:shadow-xl hover:bg-accent-primary/90',
      destructive: 'bg-red-500 text-white shadow-lg hover:shadow-xl hover:bg-red-600',
      outline: 'border-2 border-accent-primary text-accent-primary bg-transparent hover:bg-accent-primary hover:text-white',
      secondary: 'bg-bg-secondary text-text-primary border border-border-color hover:border-accent-primary hover:bg-bg-secondary/80',
      ghost: 'hover:bg-bg-secondary hover:text-text-primary',
      link: 'text-accent-primary underline-offset-4 hover:underline',
      vineyard: 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-lg hover:shadow-xl uppercase tracking-widest font-normal hover:from-accent-primary/90 hover:to-accent-secondary/90'
    }

    // Sizes - Responsive sizing
    const sizes = {
      xs: 'h-8 px-3 text-xs',
      sm: 'h-9 px-4 text-sm',
      default: 'h-11 px-6 text-base',
      lg: 'h-13 px-8 text-lg',
      xl: 'h-15 px-10 text-xl',
      icon: 'h-11 w-11 p-0'
    }

    // Responsive icon sizes
    const iconSizes = {
      xs: 'h-3 w-3',
      sm: 'h-4 w-4',
      default: 'h-5 w-5',
      lg: 'h-6 w-6',
      xl: 'h-7 w-7',
      icon: 'h-5 w-5'
    }

    // Animations
    const animations = {
      scale: {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 }
      },
      rotate: {
        whileHover: { rotate: 5 },
        whileTap: { rotate: -5 }
      },
      float: {
        whileHover: { y: -2 },
        whileTap: { y: 0 }
      },
      pulse: {
        whileHover: { scale: 1.05 },
        animate: {
          scale: [1, 1.05, 1],
          transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse'
          }
        }
      },
      none: {}
    }

    // Loading spinner
    const LoadingSpinner = () => (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className={cn('rounded-full border-2 border-current border-t-transparent', iconSizes[size])}
      />
    )

    // Button content
    const buttonContent = (
      <>
        {isLoading ? (
          <>
            <LoadingSpinner />
            {loadingText && <span className="ml-2">{loadingText}</span>}
          </>
        ) : (
          <>
            {LeftIcon && (
              <LeftIcon className={cn('mr-2', iconSizes[size], iconOnly && 'm-0')} />
            )}
            
            {!iconOnly && children}
            
            {RightIcon && (
              <RightIcon className={cn('ml-2', iconSizes[size], iconOnly && 'm-0')} />
            )}
          </>
        )}
      </>
    )

    return (
      <motion.button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          iconOnly && 'aspect-square',
          className
        )}
        disabled={disabled || isLoading}
        {...animations[animation]}
        {...props}
      >
        {buttonContent}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button }