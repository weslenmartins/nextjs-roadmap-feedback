import * as S from './styled'

type CardColumnProps = {
  title: string
  color: string | boolean
  children: React.ReactNode
}

const CardColumn = ({ title, color, children }: CardColumnProps) => {
  return (
    <S.CardColumnWrapper className={`color--${color}`}>
      <S.CardColummTitle>
        {title}
        <span className={`color--${color}`}></span>
      </S.CardColummTitle>
      {children}
    </S.CardColumnWrapper>
  )
}

export default CardColumn
