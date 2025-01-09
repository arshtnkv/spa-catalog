type ButtonColorSchemeType = 'black' | 'white' | 'red' | 'yellow'
type ButtonSizeType = 'md' | 'sm'

export interface ButtonProps {
  colorScheme?: ButtonColorSchemeType
  size?: ButtonSizeType
  className?: string
  children?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}
