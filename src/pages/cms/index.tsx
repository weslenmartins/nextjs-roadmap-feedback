import { GetServerSideProps } from 'next'
import Head from 'next/head'

import Search from '../../components/Search'
import Card from '../../components/Card'

import { connectToDatabase } from '../../utils/mongodb'
import { sortingTasks } from '../../utils/sortingTaks'

import useSWR from 'swr'
import axios from 'axios'
const fetcher = (url) => axios.get(url).then((res) => res.data)

export default function NewTask({ tasks }) {
  const { data } = useSWR(`/api/tasks/`, fetcher, {
    initialData: tasks
  })

  const tasksSorted = data.sort(sortingTasks('nameFunctionality'))

  return (
    <>
      <Head>
        <title>Edit Functionality</title>
      </Head>

      <section className="container grid-task-page">
        <section className="section-cards">
          <Search />
          {tasksSorted.map((task, index) => {
            return (
              <Card
                key={index}
                title={task.nameFunctionality}
                slug={`/cms/${task._id}`}
                description={task.contentFunctionality}
                rating={task.rating}
              />
            )
          })}
        </section>
      </section>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { db } = await connectToDatabase()
  const tasks = await db.collection(process.env.MONGODB_DB).find({}).toArray()

  return {
    props: {
      tasks: JSON.parse(JSON.stringify(tasks))
    }
  }
}
