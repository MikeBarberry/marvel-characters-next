import clientPromise from '../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const characterInfo = req.body;
  const { id, name, description, newThumbnail } = characterInfo;

  try {
    const client = await clientPromise;
    const db = client.db('marvel-api');
    const filter = { _id: ObjectId(id) };
    const update = {
      $set: {
        name,
        description,
        thumbnail: newThumbnail,
      },
    };
    await db.collection('heroes').updateOne(filter, update);
    res.status(200).json({ message: 'Character successfully updated' });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
