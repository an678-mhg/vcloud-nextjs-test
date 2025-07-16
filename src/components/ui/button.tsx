import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
  
  const variants = {
    primary: "bg-gradient-to-r from-vcloud-cyan to-vcloud-green text-white hover:shadow-lg hover:shadow-vcloud-cyan/25 focus:ring-vcloud-cyan",
    secondary: "bg-gradient-to-r from-vcloud-navy to-vcloud-navy-dark text-white hover:shadow-lg hover:shadow-vcloud-navy/25 focus:ring-vcloud-navy",
    outline: "border-2 border-vcloud-cyan text-vcloud-cyan hover:bg-vcloud-cyan hover:text-white focus:ring-vcloud-cyan",
    ghost: "text-vcloud-text-dark hover:bg-vcloud-gray-light focus:ring-vcloud-navy"
  }
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
} 