import styled from 'styled-components'

export const CardWrapper = styled.article`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
  padding-bottom: 15px;
  transition: var(--transition-in);

  &:not(:last-child) {
    border-bottom: 1px solid #e5e5e5;
  }

  &:hover {
    background-color: rgba(122, 122, 122, 0.02);
    transition: var(--transition-out);

    h2,
    p {
      color: var(--color-theme);
    }
  }
`

export const CardTitle = styled.h2`
  margin-bottom: 5px;
  color: var(--color-content);
  font-size: 0.813rem;
  font-weight: var(--font-weight-medium);
`

export const CardDescription = styled.p`
  color: var(--color-content-light);
  font-size: 0.813rem;
  font-weight: var(--font-weight-light);
  line-height: 1.3;
`
