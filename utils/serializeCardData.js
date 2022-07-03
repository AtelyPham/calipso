import { randNumber } from '@ngneat/falso';

export function serializeSectionData(place, usersData) {
  const {
    longSlug,
    image: backgroundUrl,
    name: city,
    country,
    overallScore: rating,
  } = place;

  const randomUserIdx = Math.floor(Math.random() * usersData.length);
  const user = usersData[randomUserIdx];
  const avatarUrl = user.picture.large;
  const detailUrl = `${process.env.BASE_URL}/places/${longSlug}`;

  const isFavorited = false;
  const isUserOnline = randNumber({ min: 1, max: 10 }) > 9;

  return {
    longSlug,
    city,
    avatarUrl,
    backgroundUrl,
    city,
    country,
    detailUrl,
    isFavorited,
    isUserOnline,
    rating,
  };
}
