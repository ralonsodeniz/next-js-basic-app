import { ObjectId } from 'mongodb';
import { getMongoClient } from '../../../database';
import { parseMeetup } from './helpers';

export const getMeetups = async () => {
  try {
    const client = await getMongoClient();
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    const parsedMeetups = meetups.map((meetup) => parseMeetup(meetup));
    await client.close();
    return parsedMeetups;
  } catch (error) {
    return error;
  }
};

export const getMeetupsIds = async () => {
  try {
    const client = await getMongoClient();
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
    const parsedMeetupsIds = meetups.map((meetup) => meetup._id.toString());
    await client.close();
    return parsedMeetupsIds;
  } catch (error) {
    return error;
  }
};

export const getMeetup = async (meetupId) => {
  try {
    const client = await getMongoClient();
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });
    const parsedMeetup = parseMeetup(meetup);
    await client.close();
    return parsedMeetup;
  } catch (error) {
    return error;
  }
};
