import { useState, useEffect, FormEvent } from 'react'

import * as S from './styled'
import { Heart as IconHeartSvg } from '@styled-icons/octicons/Heart'
import { HeartFill as IconHeartFillSvg } from '@styled-icons/octicons/HeartFill'

import { convertDate } from '../../utils/date'

import axios from 'axios'

type CommentsItemProps = {
  position: number
  name: string
  comment: string
  date: string
  rating: number
}

const CommentsItem = ({
  position,
  name,
  comment,
  date,
  rating
}: CommentsItemProps) => {
  const [like, setLike] = useState(false)
  const [likeValue, setLikeValue] = useState(rating)
  const [nameTask, setNameTask] = useState('')

  useEffect(() => {
    setNameTask(name)
  }, [name])

  // Handle New Comment
  function handleUpdateLikeComment(event: FormEvent) {
    event.preventDefault()
    axios.post('/api/tasks/comments/update-like-comment', {
      nameTask,
      position,
      like: rating + 1
    })
  }

  return (
    <S.CommentsItemRow>
      <p>{comment}</p>
      <S.CommentsItemFooter>
        <S.CommentsItemLike
          onClick={(event) => {
            setLike(true)
            handleUpdateLikeComment(event)
            setLikeValue(rating + 1)
          }}
        >
          {like === false ? (
            <span>
              <IconHeartSvg />
            </span>
          ) : (
            <span style={{ color: 'var(--color-like)' }}>
              <IconHeartFillSvg />
            </span>
          )}
          {likeValue}
        </S.CommentsItemLike>
        <span>{date !== 'Now' ? convertDate(date) : 'Now'}</span>
      </S.CommentsItemFooter>
    </S.CommentsItemRow>
  )
}

export default CommentsItem
