import { ReactNode } from 'react'

export interface HeadingProps {
  children: ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg'
  tagName?: 'h1' | 'h2' | 'h3' | 'h4'
  className?: string
}
