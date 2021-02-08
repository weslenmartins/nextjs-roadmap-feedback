import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  margin-bottom: 35px;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  background-color: var(--bg-header);
  border-bottom: 1px solid #e5e5e5;

  > .container {
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`

export const HeaderLogo = styled.div`
  font-size: 1.35rem;
  font-weight: var(--font-weight-bold);

  a {
    display: flex;
    align-items: center;
    color: var(--color-content);

    &:hover {
      cursor: pointer;
    }
  }

  img {
    width: 40px;
    margin-right: 10px;
  }
`

export const HeaderNav = styled.nav`
  > ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 20px;

    @media (min-width: 768px) {
      min-width: 340px;
      padding-top: 0;
    }

    > li {
      flex: 1 1 50%;

      @media (min-width: 768px) {
        flex: 1 1 auto;

        &:not(:last-child) {
          padding-right: 3rem;
        }
      }

      > a {
        display: flex;
        align-items: center;
        color: var(--color-content-light);
        font-size: 0.75rem;
        font-weight: var(--font-weight-bold);
        text-transform: uppercase;
        letter-spacing: 0.4pt;

        @media (min-width: 768px) {
          justify-content: flex-start;
        }

        &:hover {
          color: var(--color-theme);
        }

        > span {
          display: block;
          flex: 0 0 15px;
          margin-right: 5px;

          &.projectsvg {
            flex: 0 0 13px;
          }
        }
      }
    }
  }
`
