//Write a MongoDB query to find all documents in a collecƟon where a parƟcular field has a
// value greater than a certain value. 


const MongoClient = require('mongodb').MongoClient;
require('dotenv').config(); // Load environment variables from .env file

async function findDocuments() {
  const uri = process.env.MONGODB_URI; // Use environment variable for MongoDB connection string
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db(process.env.DB_NAME); // Use environment variable for the database name
    const collection = database.collection(process.env.COLLECTION_NAME); // Use environment variable for the collection name

    const fieldName = process.env.FIELD_NAME; // Use environment variable for the field name
    const value = 10; // Replace 10 with the specific value you want to compare against

    const query = { [fieldName]: { $gt: value } };
    const result = await collection.find(query).toArray();

    console.log(result);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    client.close();
  }
}

findDocuments();