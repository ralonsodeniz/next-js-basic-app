import { getPlaiceholder } from 'plaiceholder';

export const getImageData = async (image) =>
  await getPlaiceholder(image, { size: 10 });

export const parseMeetup = async (meetup) => {
  const { title, image, address, description, _id } = meetup;
  const { base64, img } = await getImageData(image);
  return {
    title,
    image,
    address,
    description,
    id: _id.toString(),
    ...img,
    blurDataURL: base64,
  };
};

export const parseMeetups = async (meetups) =>
  await meetups.reduce(async (accumulator, meetup) => {
    const parsedMeetup = await parseMeetup(meetup);
    return [...(await accumulator), parsedMeetup];
  }, []);
