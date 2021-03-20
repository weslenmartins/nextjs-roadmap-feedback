import { connectToDatabase } from '../../../utils/mongodb'

export default async (req, res) => {
  const { db } = await connectToDatabase()

  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

  const tasks = await db.collection(process.env.MONGODB_DB).find({}).toArray()

  const filterTasks = (status) => {
    const filtredTasks = tasks.filter((task) => task.status === status)

    const mapTasks = filtredTasks
      .sort((a, b) => b.modified - a.modified)
      .slice(0, 4)
      .map((filtredTask) => {
        const {
          _id,
          nameFunctionality,
          contentFunctionality,
          status,
          rating,
          modified
        } = filtredTask
        return {
          _id,
          nameFunctionality,
          contentFunctionality,
          status,
          rating,
          modified
        }
      })
    return mapTasks
  }

  res.json({
    backlog: {
      ...filterTasks('backlog')
    },
    development: {
      ...filterTasks('development')
    },
    complete: {
      ...filterTasks('complete')
    }
  })
}
