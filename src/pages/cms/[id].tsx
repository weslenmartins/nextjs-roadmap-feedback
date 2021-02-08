import { useState, useEffect, FormEvent } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

import Input from '../../components/Input'
import Select from '../../components/Select'
import Button from '../../components/Button'
import Messages from '../../components/Messages'
import DangerZone from '../../components/DangerZone'

import { Alert as IconAlertSvg } from '@styled-icons/octicons/Alert'

import useSWR from 'swr'
import axios from 'axios'
const fetcher = (url) => axios.get(url).then((res) => res.data)

import siteSetup from '../../utils/setup'

export default function TaskPage({ task }) {
  const { data } = useSWR(`/api/tasks/${task?._id}`, fetcher, {
    initialData: task
  })

  const router = useRouter()
  const { isFallback } = useRouter()

  const [id, set_id] = useState('')
  const [nameFunctionality, setNameFunctionality] = useState('')
  const [contentFunctionality, setContentFunctionality] = useState('')
  const [status, setStatus] = useState('')
  const [isSent, setIsSent] = useState(false)
  const [isDeleted, setDeleted] = useState(false)
  const [isDangerZone, setIsDangerZone] = useState(false)

  useEffect(() => {
    set_id(data._id)
    setNameFunctionality(data.nameFunctionality)
    setContentFunctionality(data.contentFunctionality)
    setStatus(data.status)
  }, [data])

  // Handle Update
  function handleUpdateTask(event: FormEvent) {
    event.preventDefault()

    axios.post('/api/tasks/update-info-task', {
      id,
      nameFunctionality,
      contentFunctionality,
      status
    })
  }

  // Handle Update
  function handleDeleteTask(event: FormEvent) {
    event.preventDefault()

    axios.post('/api/tasks/delete-task', {
      id
    })
  }

  if (isFallback) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Head>
        <title>{task.nameFunctionality} | Edit Functionality</title>
      </Head>

      <section className="container grid-task-page">
        <article>
          <form
            onSubmit={(event) => {
              event.preventDefault()
              setIsSent(true)
              setTimeout(() => {
                handleUpdateTask(event)
                setIsSent(false)
              }, 1 * 1000)
            }}
          >
            <Input
              label="Name functionality"
              type="text"
              id="nameFunctionality"
              placeholder={data.nameFunctionality}
              onChange={(event) => {
                setNameFunctionality(event.target.value)
              }}
              value={nameFunctionality}
            />
            <Input
              label="Feature description"
              type="textarea"
              id="contentFunctionality"
              placeholder={data.contentFunctionality}
              onChange={(event) => {
                setContentFunctionality(event.target.value)
              }}
              value={contentFunctionality}
            />
            <Select
              label="Status"
              id="status"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            >
              <option value="waiting">Waiting</option>
              <option value="backlog">Backlog</option>
              <option value="development">Development</option>
              <option value="complete">Complete</option>
            </Select>
            <div className="btn-groups">
              <Button
                type="button"
                variant="delete"
                disabled={false}
                onClick={(event) => {
                  event.preventDefault()
                  setIsDangerZone(true)
                }}
              >
                Delete
              </Button>
              <Button
                type="submit"
                variant="primary"
                disabled={
                  nameFunctionality.length === 0 ||
                  contentFunctionality.length === 0
                }
              >
                Update
              </Button>
            </div>
            {isSent === true ? (
              <Messages type="success">Sent with success</Messages>
            ) : (
              ''
            )}
            {isDeleted === true ? (
              <Messages type="delete">
                Feature suggestion successfully detected
              </Messages>
            ) : (
              ''
            )}
          </form>

          {isDangerZone === true ? (
            <DangerZone>
              <Button
                type="button"
                variant="delete"
                disabled={false}
                onClick={(event) => {
                  event.preventDefault()
                  setDeleted(true)
                  setTimeout(() => {
                    handleDeleteTask(event)
                    router.push(`/cms`)
                  }, 1 * 1500)
                }}
              >
                <IconAlertSvg /> Permanently delete
              </Button>
            </DangerZone>
          ) : (
            ''
          )}
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
