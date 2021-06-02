import { MongoClient } from 'mongodb';

export const getMongoClient = async () => {
  const client = await MongoClient.connect(process.env.DB_CONNECTION_STRING, {
    useUnifiedTopology: true,
  });
  return client;
};
