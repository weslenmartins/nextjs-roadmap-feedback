import { connectToDatabase } from '../../../utils/mongodb'

async function tasksHandler({ query: { _id } }, res) {
  const { db } = await connectToDatabase()
  const task = await db.collection(process.env.MONGODB_DB).find({}).toArray()
  const taskJson = JSON.parse(JSON.stringify(task))

  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

  const tasksFiltered = taskJson.filter((p) => p._id === _id)

  // User with id exists
  if (tasksFiltered.length > 0) {
    res.status(200).json(tasksFiltered[0])
  } else {
    res.status(404).json({ message: `User with id: ${_id} not found.` })
  }
}

export default tasksHandler
