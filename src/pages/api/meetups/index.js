import { getMeetups } from '@Http/handlers/meetups';

const handler = async (req, res) => {
  const { method } = req;
  if (method === 'GET') {
    try {
      const meetups = await getMeetups();
      res.status(201).json(meetups);
    } catch (error) {
      res.status(500).json({ error });
    }
  } else res.status(405).json({ error: 'Invalid method' });
};

export default handler;
