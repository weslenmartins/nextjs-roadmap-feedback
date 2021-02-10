import { NowRequest, NowResponse } from '@vercel/node'
import { MongoClient, Db } from 'mongodb'
import url from 'url'
import sgMail from '@sendgrid/mail'

import siteSetup from '../../../utils/setup'

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
  const { nameFunctionality, contentFunctionality } = request.body

  const db = await connectToDatabase(process.env.MONGODB_URI)
  // console.log(process.env.MONGODB_URI)

  const collection = db.collection(process.env.MONGODB_DB)

  try {
    await collection.insertOne({
      nameFunctionality,
      contentFunctionality,
      status: 'waiting',
      rating: 0,
      visible: true,
      date: new Date(),
      comments: []
    })

    if (siteSetup.email.length > 0) {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY)
      const msg = {
        to: siteSetup.email, // Change to your recipient
        from: 'info@weslenmartins.com.br', // Change to your verified sender
        subject: `New suggestion sent - ${nameFunctionality}`,
        text: contentFunctionality,
        html: `<h1>Roadmap Feedback</h1><br><strong>Functionality:</strong> ${nameFunctionality} <br> <strong>Content:</strong> ${contentFunctionality}`
      }
      await sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) => {
          console.error(error)
        })
    }
  } catch (e) {
    console.log(e)
  }

  return response.status(201).json({ ok: true })
}
