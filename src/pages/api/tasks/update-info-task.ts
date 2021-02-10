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
  const { id, nameFunctionality, contentFunctionality, status } = request.body
  const modified = new Date()

  const db = await connectToDatabase(process.env.MONGODB_URI)
  // console.log(process.env.MONGODB_URI)

  const collection = db.collection(process.env.MONGODB_DB)

  // const myquery = { nameFunctionality: nameFunctionalityRaw }
  const myquery = { _id: new ObjectId(id) }
  const newvalues = {
    $set: {
      nameFunctionality: nameFunctionality,
      contentFunctionality: contentFunctionality,
      status: status,
      modified: modified
    }
  }

  await collection.updateOne(myquery, newvalues, function (err) {
    if (err) throw err
    console.log('One task updated')
  })

  return response.status(201).json({ ok: true })
}
