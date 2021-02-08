import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

import Task from '../../components/Task'
import Comments from '../../components/Comments'

import siteSetup from '../../utils/setup'
import { convertDate } from '../../utils/date'

import useSWR from 'swr'
import axios from 'axios'
const fetcher = (url) => axios.get(url).then((res) => res.data)

export default function TaskPage({ task }) {
  const { data } = useSWR(`/api/tasks/${task?._id}`, fetcher, {
    initialData: task
  })

  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Head>
        <title>{data.nameFunctionality}</title>
      </Head>
      <section className="container grid-task-page">
        <article>
          <Task
            title={data.nameFunctionality}
            status={data.status}
            rating={data.rating}
            content={data.contentFunctionality}
            date={convertDate(data.date)}
          />
          <Comments name={data.nameFunctionality} comments={task.comments} />
        </article>
      </section>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params
  const response = await fetch(`${siteSetup.url}/api/tasks/${id}`)
  const dataTasks = await response.json()

  return {
    props: {
      task: dataTasks
    }
  }
}
