import styled from 'styled-components'

export const CardColumnWrapper = styled.section`
  flex: 1;
  min-width: 250px;
  margin: 0 10px;
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: 0 5px 35px rgba(100, 100, 100, 0.07);
  border-top: 2px solid var(--color-theme);

  @media (min-width: 768px) {
    min-width: auto;
    margin: 0 15px;
  }

  &.color {
    &--backlog {
      border-color: var(--color-backlog);
    }
    &--development {
      border-color: var(--color-development);
    }
    &--complete {
      border-color: var(--color-complete);
    }
    &--waiting {
      border-color: var(--color-waiting);
    }
  }

  > form {
    padding: 0 15px 20px;
  }
`
export const CardColummTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
  font-size: 1.15rem;
  font-weight: var(--font-weight-medium);

  > span {
    display: block;
    width: 25px;
    height: 7px;
    background-color: var(--color-theme);
    border-radius: var(--border-radius);

    &.color {
      &--backlog {
        background-color: var(--color-backlog);
      }
      &--development {
        background-color: var(--color-development);
      }
      &--complete {
        background-color: var(--color-complete);
      }
      &--waiting {
        background-color: var(--color-waiting);
      }
    }
  }
`
