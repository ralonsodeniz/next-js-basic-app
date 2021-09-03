import { useEffect } from 'react';
import Head from 'next/head';
import useSWR from 'swr';
import MeetUpList from '@Components/MeetUpList';
import { getMeetups } from '@Http/handlers/meetups';
import { useRenderContext } from '@Contexts/RenderContext';
import { endpoints } from '@Enums/endpoints';
import { literals } from '@Enums/literals';

const HomePage = ({ initialMeetups }) => {
  const { data: meetups, mutate } = useSWR(endpoints.MEETUPS, {
    initialData: initialMeetups,
    refreshInterval: 30000,
  });
  const isFirstRender = useRenderContext();

  useEffect(() => {
    if (!isFirstRender) mutate();
  }, []);

  return (
    <>
      <Head>
        <title>{literals.homePage.TITLE}</title>
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
        revalidate: 30,
      }
    : { notFound: true };
};

export default HomePage;
