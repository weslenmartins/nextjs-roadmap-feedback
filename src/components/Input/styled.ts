import styled from 'styled-components'

export const FormControl = styled.div`
  margin-bottom: 20px;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 7px;
  color: var(--color-content-light);
  font-size: 0.75rem;
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  letter-spacing: 0.5pt;

  &:hover {
    color: var(--color-theme);

    cursor: pointer;
  }
`

export const InputField = styled.input`
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

export const TextField = styled.textarea`
  width: 100%;
  height: 60px;
  padding: 8px 15px;
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
