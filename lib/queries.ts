const postFields = `
  _id,
  title,
  date,
  teaser,
  image,
  "slug": slug.current,
`;

export const GET_POSTS = `*[_type == "post"] | order(date desc, _updatedAt desc) {${postFields}}`;
