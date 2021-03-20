import { connectToDatabase } from '../../../../utils/mongodb'
import siteSetup from '../../../../utils/setup'

export default async (req, res) => {
  const { db } = await connectToDatabase()

  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

  const tasks = await db.collection(process.env.MONGODB_DB).find({}).toArray()

  function filterStatus(data, key) {
    return [...new Map(data.map((x) => [key(x), x])).values()]
  }

  const filterTasks = filterStatus(tasks, (it) => it.status)
  const statusTasks = filterTasks.map((status) => {
    return { status: `${siteSetup.url}/api/tasks/status/${status.status}` }
  })

  res.json({ ...statusTasks })
}
