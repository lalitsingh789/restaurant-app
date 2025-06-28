const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://singhlalit789w017:lalit7890@cluster0.3pn50j9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(uri);

let db;

async function connectDb() {
  if (!db) {
    await client.connect();
    db = client.db('RESTRO');
    console.log("DB connected");
  }
  return db;
}

// Execute the function once to establish connection
connectDb().catch(console.error);

module.exports = connectDb;
