import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Badge({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '' 
}: BadgeProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200"
  
  const variants = {
    primary: "bg-gradient-to-r from-vcloud-cyan to-vcloud-green text-white",
    secondary: "bg-vcloud-navy text-white",
    success: "bg-vcloud-green text-white",
    warning: "bg-yellow-500 text-white",
    outline: "border-2 border-vcloud-cyan text-vcloud-cyan bg-transparent"
  }
  
  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base"
  }
  
  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  )
} 