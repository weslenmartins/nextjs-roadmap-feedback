import Link from 'next/link'

import * as S from './styled'
import { DiffAdded as DiffAddedSvg } from '@styled-icons/octicons/DiffAdded'
import { Project as ProjectSvg } from '@styled-icons/octicons/Project'

const Header = () => {
  return (
    <S.HeaderWrapper>
      <div className="container">
        <S.HeaderLogo>
          <Link href="/">
            <a title="View Roadmap">
              <img src="/logo.svg" alt="" />
              Roadmap Feedback
            </a>
          </Link>
        </S.HeaderLogo>
        <S.HeaderNav>
          <ul>
            <li>
              <Link href="/">
                <a title="View Roadmap">
                  <span className="projectsvg">
                    <ProjectSvg />
                  </span>
                  Roadmap
                </a>
              </Link>
            </li>
            <li>
              <Link href="/new-task">
                <a title="Suggest functionality">
                  <span>
                    <DiffAddedSvg />
                  </span>{' '}
                  Suggest functionality
                </a>
              </Link>
            </li>
          </ul>
        </S.HeaderNav>
      </div>
    </S.HeaderWrapper>
  )
}

export default Header
