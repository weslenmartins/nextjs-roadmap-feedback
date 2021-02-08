import styled from 'styled-components'

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 20px;
  background-color: var(--color-content-dark);
  border: none;
  border-radius: var(--border-radius);
  color: white;
  font-family: var(--font-title);
  font-size: 0.813rem;
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: 0.5pt;
  outline: none;

  &:hover {
    background-color: black;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &.delete {
    background-color: var(--color-warning);
    &:hover {
      background-color: var(--color-warning-dark);
    }
  }

  &.primary {
    background-color: var(--color-theme);
    &:hover {
      background-color: var(--color-theme-dark);
    }
  }

  > svg {
    width: 13px;
    height: 13px;
    margin-right: 7px;
  }
`
