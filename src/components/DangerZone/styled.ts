import styled from 'styled-components'

export const DangerZoneWrapper = styled.div`
  margin-top: 45px;
  border: 1px solid red;
  border-radius: var(--border-radius);
  background-color: white;
`

export const DangerZoneItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  font-size: 0.813rem;
  line-height: 1.3;

  &:not(:last-child) {
    border-bottom: 1px solid red;
  }

  > span {
    display: block;
    margin-right: 30px;

    @media (min-width: 992px) {
      width: 60%;
    }
  }
`
