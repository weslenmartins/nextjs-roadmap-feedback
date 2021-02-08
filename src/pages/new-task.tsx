import { useState, FormEvent } from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Search from '../components/Search'
import Card from '../components/Card'
import CardColumn from '../components/CardColumn'
import Input from '../components/Input'
import Button from '../components/Button'
import Messages from '../components/Messages'

import { PaperAirplane as IconPaperAirplaneSvg } from '@styled-icons/octicons/PaperAirplane'

import { connectToDatabase } from '../utils/mongodb'
import { sortingTasks } from '../utils/sortingTaks'

import useSWR from 'swr'
import axios from 'axios'
const fetcher = (url) => axios.get(url).then((res) => res.data)

export default function NewTask({ tasks }) {
  const { data } = useSWR(`/api/tasks/`, fetcher, {
    initialData: tasks
  })

  const router = useRouter()
  const [nameFunctionality, setNameFunctionality] = useState('')
  const [contentFunctionality, setContentFunctionality] = useState('')
  const [isSent, setIsSent] = useState(false)

  const tasksSorted = data.sort(sortingTasks('nameFunctionality'))

  // Handle Register
  function handleNewTask(event: FormEvent) {
    event.preventDefault()
    axios.post('/api/tasks/register-task', {
      nameFunctionality,
      contentFunctionality
    })
  }

  return (
    <>
      <Head>
        <title>Suggest Functionality</title>
      </Head>

      <section className="container grid-task-page">
        <section className="section-cards">
          <Search />

          {tasksSorted.map((task, index) => {
            return (
              <Card
                key={index}
                title={task.nameFunctionality}
                slug={`/tasks/${task._id}`}
                description={task.contentFunctionality}
                rating={task.rating}
              />
            )
          })}
        </section>
        <aside>
          <CardColumn title="Suggest Functionality" color>
            <form
              onSubmit={(event) => {
                event.preventDefault()
                setIsSent(true)

                setTimeout(() => {
                  handleNewTask(event)
                  setNameFunctionality('')
                  setContentFunctionality('')
                  setIsSent(false)
                  router.push(`/new-task`)
                }, 1 * 1000)
              }}
            >
              <Input
                label="New functionality"
                type="text"
                id="nameFunctionality"
                placeholder="Summarize the new functionality"
                onChange={(event) => {
                  setNameFunctionality(event.target.value)
                }}
                value={nameFunctionality}
              />
              <Input
                label="Feature description"
                type="textarea"
                id="contentFunctionality"
                placeholder="Describe in detail the new functionality"
                onChange={(event) => {
                  setContentFunctionality(event.target.value)
                }}
                value={contentFunctionality}
              />
              <div className="btn-groups">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={
                    nameFunctionality.length === 0 ||
                    contentFunctionality.length === 0
                  }
                >
                  <IconPaperAirplaneSvg /> Send
                </Button>
              </div>

              {isSent === true ? (
                <Messages type="success">Sent with success</Messages>
              ) : (
                ''
              )}
            </form>
          </CardColumn>
        </aside>
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
