import * as S from './styled'

const DangerZone = ({ children }) => {
  return (
    <S.DangerZoneWrapper>
      <S.DangerZoneItem>
        <span>
          Do you really want to delete this functionality suggestion?{' '}
          <strong>You will not be able to recover this item</strong>
        </span>
        {children}
      </S.DangerZoneItem>
    </S.DangerZoneWrapper>
  )
}

export default DangerZone
