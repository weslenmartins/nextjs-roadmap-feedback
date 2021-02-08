import styled from 'styled-components'

export const SelectField = styled.select`
  width: 100%;
  height: 40px;
  padding: 0 15px;
  border: 1px solid var(--color-content-light);
  border-radius: var(--border-radius);

  color: var(--color-content);
  font-family: var(--font-family);
  outline: none;

  &:hover {
    border-color: var(--color-theme);
    color: black;
  }
`
