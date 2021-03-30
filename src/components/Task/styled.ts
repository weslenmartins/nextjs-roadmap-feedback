import styled from 'styled-components'

export const TaskCardWrapper = styled.div``

export const TaskCardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 25px;
`

export const TaskCardTitle = styled.h2`
  color: var(--color-content);
  font-size: 1.25rem;
  font-weight: var(--font-weight-medium);

  > span {
    display: block;
    padding-top: 8px;
    color: var(--color-theme);
    font-size: 0.813rem;
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
    letter-spacing: 0.3pt;
    line-height: 1;

    &.color {
      &--backlog {
        color: var(--color-backlog);
      }
      &--development {
        color: var(--color-development);
      }
      &--complete {
        color: var(--color-complete);
      }
      &--waiting {
        color: var(--color-waiting);
      }
    }
  }
`

export const TaskCardContent = styled.div`
  margin-bottom: 20px;
  color: var(--color-content);
  font-size: 1rem;
  font-weight: var(--font-weight-regular);
  line-height: 1.7;
  white-space: pre-wrap;
`

export const TaskCardDate = styled.span`
  display: block;
  color: var(--color-content-light);
  font-size: 0.75rem;
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  letter-spacing: 0.3pt;
  line-height: 1;

  > svg {
    width: 13px;
    transform: translateY(-3px);
  }
`
