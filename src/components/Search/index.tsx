import React from 'react'
import Input from '../Input'

import * as S from './styled'
import { Search as IconSearchSvg } from '@styled-icons/octicons/Search'

import { searchFilter } from '../../utils/search'

const Search = () => {
  const [search, setSearch] = React.useState('')

  return (
    <S.SearchWrapper>
      <S.SearchIcon>
        <IconSearchSvg />
      </S.SearchIcon>
      <Input
        label="Search one functionality"
        type="text"
        id="search"
        placeholder="Search..."
        onChange={(event) => {
          event.preventDefault()
          setSearch(event.target.value)
          searchFilter()
        }}
        value={search}
      />
    </S.SearchWrapper>
  )
}

export default Search
