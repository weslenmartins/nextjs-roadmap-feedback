import { GetStaticProps } from 'next'
import Head from 'next/head'
import Card from '../components/Card'

import CardColumn from '../components/CardColumn'

import { connectToDatabase } from '../utils/mongodb'
import { sortingTasks } from '../utils/sortingTaks'

import useSWR from 'swr'
import axios from 'axios'
const fetcher = (url) => axios.get(url).then((res) => res.data)

// Create loop of tasks
export default function Home({ tasks }) {
  const { data } = useSWR(`/api/tasks`, fetcher, {
    initialData: tasks
  })

  const filterTasks = (status) => {
    const filtredTasks = data.filter((task) => task.status === status)
    const filtredTasksSorted = filtredTasks.sort(
      sortingTasks('nameFunctionality')
    )

    const mapTasks = filtredTasksSorted.map((filtredTask, index) => {
      return (
        <Card
          key={index}
          title={filtredTask.nameFunctionality}
          slug={`/tasks/${filtredTask._id}`}
          description={filtredTask.contentFunctionality}
          rating={filtredTask.rating}
        />
      )
    })
    return mapTasks
  }

  return (
    <>
      <Head>
        <title>Home | Roadmap</title>
      </Head>

      <section className="container grid-columns">
        <CardColumn title="Backlog" color="backlog">
          {filterTasks('backlog')}
        </CardColumn>
        <CardColumn title="Development" color="development">
          {filterTasks('development')}
        </CardColumn>
        <CardColumn title="Complete" color="complete">
          {filterTasks('complete')}
        </CardColumn>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { db } = await connectToDatabase()
  const tasks = await db.collection(process.env.MONGODB_DB).find({}).toArray()

  return {
    props: {
      tasks: JSON.parse(JSON.stringify(tasks))
    },
    revalidate: 1
  }
}
