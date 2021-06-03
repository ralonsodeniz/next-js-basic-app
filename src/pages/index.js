import Head from 'next/head';
import MeetUpList from '../components/MeetUpList';
import { getMeetups } from '../http/handlers/meetups';

const HomePage = ({ meetups }) => (
  <>
    <Head>
      <title>Meetups</title>
      <meta name="description" content="Browse meetups in your town" />
    </Head>
    <MeetUpList meetups={meetups} />
  </>
);

export const getStaticProps = async () => {
  const meetups = await getMeetups();

  return meetups
    ? {
        props: {
          meetups,
        },
        revalidate: 60,
      }
    : { notFound: true };
};

export default HomePage;
