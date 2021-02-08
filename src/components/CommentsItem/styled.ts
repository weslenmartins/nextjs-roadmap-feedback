import styled from 'styled-components'

export const CommentsItemRow = styled.div`
  font-size: 0.875rem;
  line-height: 1.5;

  &:not(:last-child) {
    margin-bottom: 35px;
  }
`

export const CommentsItemFooter = styled.div`
  display: grid;
  grid-template-columns: minmax(40px, 60px) 1fr;
  grid-gap: 0 15px;
  padding-top: 10px;
  color: var(--color-content-light);
  font-size: 0.75rem;
`

export const CommentsItemLike = styled.span`
  cursor: pointer;

  > span {
    display: inline-block;
    width: 11px;
    margin-right: 7px;
    transform: translateY(-1px);
  }
`
