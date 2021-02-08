import styled from 'styled-components'

export const SearchWrapper = styled.div`
  position: relative;
  padding-left: 15px;
  padding-right: 15px;

  input {
    padding-left: 30px;
  }
`

export const SearchIcon = styled.span`
  position: absolute;
  top: 28px;
  left: 25px;
  width: 15px;
  z-index: var(--zindex-default);
  pointer-events: none;
  opacity: 0.9;
`
