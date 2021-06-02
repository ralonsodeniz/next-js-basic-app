import { getMongoClient } from '../../../database';

const handler = async (req, res) => {
  const { method, body } = req;
  if (method === 'POST') {
    try {
      const client = await getMongoClient();
      const db = client.db();
      const meetupsCollection = db.collection('meetups');
      const { insertedId } = await meetupsCollection.insertOne(body);
      await client.close();
      res.status(201).json({ message: `meetup ${insertedId} added` });
    } catch (error) {
      res.status(500).json({ error });
    }
  } else res.status(405).json({ error: 'Invalid method' });
};

export default handler;
