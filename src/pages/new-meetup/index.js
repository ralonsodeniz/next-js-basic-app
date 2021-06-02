import { useRouter } from 'next/router';
import MeetUpForm from '../../components/MeetUpForm';
import { postJson } from '../../http';
import { useCallback } from 'react';
import Head from 'next/head';

const NewMeetupPage = () => {
  const { push } = useRouter();

  const handleAddMeetUp = useCallback(async (meetupData) => {
    try {
      const {
        data: { message },
      } = await postJson('/new-meetup', meetupData);
      console.log(message);
      push('/');
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Add new Meetups</title>
        <meta name="description" content="Add new meetup" />
      </Head>
      <MeetUpForm onAddMeetUp={handleAddMeetUp} />
    </>
  );
};

export default NewMeetupPage;
