import React from 'react'
import * as S from './styled'

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset'
  children: React.ReactNode
  variant: string
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  type,
  children,
  variant,
  disabled,
  onClick
}: ButtonProps) => {
  return (
    <S.Button
      type={type}
      className={variant}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </S.Button>
  )
}

export default Button
