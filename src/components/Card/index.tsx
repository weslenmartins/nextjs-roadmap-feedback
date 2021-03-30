import React from 'react'
import Link from 'next/link'
import RatingBox from '../Rating/'

import * as S from './styled'

type CardProps = {
  title: string
  slug: string
  description: string
  rating: number
}

const Card = ({ title, slug, description, rating }: CardProps) => {
  return (
    <S.CardWrapper>
      <RatingBox rating={rating} title={title} />
      <Link href={slug}>
        <a title={title}>
          <S.CardTitle>{title}</S.CardTitle>
          <S.CardDescription>
            {description.length >= 50
              ? `${description.substring(0, 70)}...`
              : description}
          </S.CardDescription>
        </a>
      </Link>
    </S.CardWrapper>
  )
}

export default Card
