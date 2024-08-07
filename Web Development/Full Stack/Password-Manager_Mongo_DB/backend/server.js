
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const { MongoClient } = require('mongodb');
require('dotenv').config()


// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'passave';
const port = 3000
app.use(bodyParser.json())
app.use(cors())

client.connect();

app.get('/', async(req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const result = await collection.find({}).toArray();
  res.json(result)
})

app.post('/', async(req, res) => {
    const passwords = req.body
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const result = await collection.insertOne(passwords);
  res.send({Success: "Password saved"})
})

app.delete('/', async(req, res) => {
  const passwords = req.body
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const result = await collection.deleteOne(passwords);
  res.send({Success: "Password Deleted"})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})