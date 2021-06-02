export const parseMeetup = (meetup) => {
  const { title, image, address, description, _id } = meetup;
  return {
    title,
    image,
    address,
    description,
    id: _id.toString(),
  };
};
