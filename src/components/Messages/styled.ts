import styled from 'styled-components'

export const MessagesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 15px 0;
  padding: 10px 15px;
  border: 1px solid var(--color-content-light);
  border-radius: var(--border-radius);
  font-size: 0.75rem;
  font-weight: var(--font-weight-bold);

  &[data-type='success'] {
    border-color: var(--color-theme-dark);
    background-color: var(--color-theme-dark);
    color: white;
  }

  &[data-type='delete'] {
    border-color: red;
    background-color: red;
    color: white;
  }

  > span {
    display: inline-block;
    width: 15px;
    margin-right: 7px;
  }
`
