import { useState, useEffect, FormEvent } from 'react'

import * as S from './styled'
import { Thumbsup as IconThumbsupSvg } from '@styled-icons/octicons/Thumbsup'

import axios from 'axios'

const RatingBox = ({ rating, title }) => {
  const [ratingvalue, setRatingvalue] = useState('')
  const [ratingSelected, setRatingSelected] = useState(undefined)

  useEffect(() => {
    setRatingvalue(rating)
  }, [rating])

  function handleUpdateTask(event: FormEvent) {
    event.preventDefault()
    axios.post('/api/tasks/update-task', {
      nameFunctionality: title,
      rating: rating + 1
    })
  }

  return (
    <S.Rating
      onClick={(event) => {
        event.preventDefault()
        setRatingvalue(ratingvalue + 1)
        setRatingSelected(true)
        handleUpdateTask(event)
      }}
      data-selected={ratingSelected}
    >
      {ratingvalue}
      <S.RatingLike>
        <IconThumbsupSvg />
      </S.RatingLike>
    </S.Rating>
  )
}

export default RatingBox
