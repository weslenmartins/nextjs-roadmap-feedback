import RatingBox from '../Rating/'

import * as S from './styled'
import { Calendar as IconCalendarSvg } from '@styled-icons/octicons/Calendar'

type TaskProps = {
  title: string
  status: string
  content: string
  rating: number
  date: string
}

const Task = ({ title, status, content, rating, date }: TaskProps) => {
  return (
    <S.TaskCardWrapper>
      <S.TaskCardHeader>
        <RatingBox rating={rating} title={title} />

        <S.TaskCardTitle>
          {title} <span className={`color--${status}`}>{status}</span>
        </S.TaskCardTitle>
      </S.TaskCardHeader>
      <S.TaskCardContent>{content}</S.TaskCardContent>
      <S.TaskCardDate>
        <IconCalendarSvg /> {date}
      </S.TaskCardDate>
    </S.TaskCardWrapper>
  )
}

export default Task
