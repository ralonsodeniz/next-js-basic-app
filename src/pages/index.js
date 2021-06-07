// import { useEffect } from 'react';
import Head from 'next/head';
import MeetUpList from '../components/MeetUpList';
import { getMeetups } from '../http/handlers/meetups';
import { getJson } from '../http';
// import { useRenderContext } from '../contexts/RenderContext';

const HomePage = ({ initialMeetups }) => {
  const { data: meetups, mutate } = getJson('/meetups', {
    initialData: initialMeetups,
    revalidateOnMount: true,
  });
  // const isFirstRender = useRenderContext();
  //
  // useEffect(() => {
  //   if (!isFirstRender) mutate();
  // }, []);

  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta name="description" content="Browse meetups in your town" />
      </Head>
      <MeetUpList meetups={meetups} />
    </>
  );
};

export const getStaticProps = async () => {
  const initialMeetups = await getMeetups();

  return initialMeetups
    ? {
        props: {
          initialMeetups,
        },
        revalidate: 60,
      }
    : { notFound: true };
};

export default HomePage;
