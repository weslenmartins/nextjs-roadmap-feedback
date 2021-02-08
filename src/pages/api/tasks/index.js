import { connectToDatabase } from '../../../utils/mongodb'

export default async (req, res) => {
  const { db } = await connectToDatabase()

  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

  const tasks = await db.collection(process.env.MONGODB_DB).find({}).toArray()

  res.json(tasks)
}
