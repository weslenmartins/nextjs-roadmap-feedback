import { useState, useEffect, FormEvent } from 'react'
import Input from '../Input'
import React from 'react'
import Button from '../Button'
import Messages from '../Messages'
import CommentsItem from '../CommentsItem'

import * as S from './styled'
import { Comment as IconCommentSvg } from '@styled-icons/octicons/Comment'

import axios from 'axios'

const Comments = ({ name, comments }) => {
  const [comment, setComment] = useState('')
  const [newcommentView, setNewCommentView] = useState(false)
  const [nameTask, setNameTask] = useState('')
  const [isSent, setIsSent] = useState(false)

  useEffect(() => {
    setNameTask(name)
  }, [name])

  // Handle New Comment
  function handleNewComment(event: FormEvent) {
    event.preventDefault()

    axios.post('/api/tasks/comments/register-comment', {
      nameTask,
      comment
    })
  }

  return (
    <S.CommentsWrapper>
      <S.FormWrapper
        onSubmit={(event) => {
          event.preventDefault()
          setIsSent(true)
          setTimeout(() => {
            handleNewComment(event)
            setNewCommentView(true)
            setIsSent(false)
          }, 1 * 1000)
        }}
      >
        <Input
          label="New comment"
          type="textarea"
          id="comment"
          placeholder="What did you think of this new feature suggestion?"
          onChange={(event) => {
            setComment(event.target.value)
          }}
          value={comment}
        />
        <div className="btn-groups">
          <Button
            type="submit"
            variant="primary"
            disabled={comment.length === 0}
          >
            <IconCommentSvg />
            Comment
          </Button>
        </div>
        {isSent === true ? (
          <Messages type="success">Cooment sent with success</Messages>
        ) : (
          ''
        )}
      </S.FormWrapper>
      <S.CommentsBlock>
        {comments.map((comment, index) => {
          return (
            <CommentsItem
              key={index}
              position={index}
              name={nameTask}
              comment={comment.comment}
              date={comment.date}
              rating={comment.rating}
            />
          )
        })}

        {newcommentView ? (
          <CommentsItem
            position={null}
            name={nameTask}
            comment={comment}
            date="Now"
            rating={null}
          />
        ) : (
          ''
        )}
      </S.CommentsBlock>
    </S.CommentsWrapper>
  )
}

export default Comments
