import styled from 'styled-components'

export const Rating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  padding: 10px;
  border: 1px solid #e5e5e5;
  border-radius: var(--border-radius);
  color: var(--color-content-light);
  font-size: 1.15rem;
  font-weight: var(--font-weight-medium);
  transition: var(--transition-in);

  &:hover {
    background-color: white;
    border-color: var(--color-theme);
    box-shadow: 0 5px 15px rgba(39, 174, 96, 0.2);
    transition: var(--transition-out);
    cursor: pointer;

    > span {
      color: var(--color-theme);
    }
  }

  &[data-selected='true'] {
    background-color: var(--color-theme);
    border-color: var(--color-theme);
    color: white;
    transition: var(--transition-out);
    pointer-events: none;
  }
`

export const RatingLike = styled.span`
  display: block;
  width: 13px;
  height: 13px;
  margin-top: 5px;

  > svg {
    transform: translateY(-5px);
  }
`
