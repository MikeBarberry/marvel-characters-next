import { ObjectId } from 'mongodb';

import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  const { characterId } = req.body;

  try {
    const client = await clientPromise;
    const db = client.db('marvel-api');
    await db.collection('heroes').deleteOne({ _id: ObjectId(characterId) });
    res.status(200).json({ message: 'Character successfully deleted' });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
