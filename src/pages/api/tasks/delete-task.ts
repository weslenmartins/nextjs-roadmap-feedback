import { NowRequest, NowResponse } from '@vercel/node'
import { MongoClient, Db, ObjectId } from 'mongodb'
import url from 'url'

let cachedDb: Db = null

async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const dbName = url.parse(uri).pathname.substr(1)
  const db = client.db(dbName)
  cachedDb = db
  return db
}

export default async (request: NowRequest, response: NowResponse) => {
  const { id } = request.body

  const db = await connectToDatabase(process.env.MONGODB_URI)
  // console.log(process.env.MONGODB_URI)

  const collection = db.collection(process.env.MONGODB_DB)

  // const myquery = { nameFunctionality: nameFunctionalityRaw }
  const myquery = { _id: new ObjectId(id) }

  await collection.deleteOne(myquery, function (err) {
    if (err) throw err
    console.log('One task deleted')
  })

  return response.status(201).json({ ok: true })
}
