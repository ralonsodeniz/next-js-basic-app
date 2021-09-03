import MeetUpDetail from '@Components/MeetUpDetail';
import { getMeetup, getMeetupsIds } from '@Http/handlers/meetups';
import Head from 'next/head';

const MeetUpDetailPage = ({ meetup }) => {
  const { title, description } = meetup;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <MeetUpDetail data={meetup} />
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const { meetupId } = params;
  const meetup = await getMeetup(meetupId);

  return meetup
    ? {
        props: {
          meetup,
        },
      }
    : { notFound: true };
};

export const getStaticPaths = async () => {
  const meetupsIds = await getMeetupsIds();
  const paths = meetupsIds.map((meetupId) => ({
    params: { meetupId },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export default MeetUpDetailPage;
