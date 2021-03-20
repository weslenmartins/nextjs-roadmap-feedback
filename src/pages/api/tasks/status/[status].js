import { connectToDatabase } from '../../../../utils/mongodb'

async function tasksHandler({ query: { status } }, res) {
  const { db } = await connectToDatabase()
  const task = await db.collection(process.env.MONGODB_DB).find({}).toArray()
  const taskJson = JSON.parse(JSON.stringify(task))

  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

  const tasksFiltered = taskJson.filter((p) => p.status === status)

  res.json(tasksFiltered)
}

export default tasksHandler
