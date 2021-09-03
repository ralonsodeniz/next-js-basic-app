import { useRouter } from 'next/router';
import MeetUpForm from '@Components/MeetUpForm';
import { postJson } from '@Http/index';
import Head from 'next/head';
import { endpoints } from '@Enums/endpoints';
import { literals } from '@Enums/literals';
import { paths } from '@Enums/paths';

const NewMeetupPage = () => {
  const { push } = useRouter();

  const handleAddMeetUp = async (meetupData) => {
    try {
      const {
        data: { message },
      } = await postJson(endpoints.NEW_MEETUP, meetupData);
      console.log(message);
      push(paths.HOME);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>{literals.newMeetupPage.TITLE}</title>
        <meta name="description" content="Add new meetup" />
      </Head>
      <MeetUpForm onAddMeetUp={handleAddMeetUp} />
    </>
  );
};

export default NewMeetupPage;
