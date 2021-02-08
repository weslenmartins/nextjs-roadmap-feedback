import * as S from './styled'
import { Bell as IconBellSvg } from '@styled-icons/octicons/Bell'

const Messages = ({ type, children }) => {
  return (
    <S.MessagesWrapper data-type={type}>
      <span>
        <IconBellSvg />
      </span>{' '}
      {children}
    </S.MessagesWrapper>
  )
}

export default Messages
