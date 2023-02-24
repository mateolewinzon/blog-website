const postFields = `
  _id,
  title,
  date,
  teaser,
  image,
  "category": category->.name,
  "slug": slug.current,
`;

export const GET_POSTS = `*[_type == "post"] | order(date desc, _updatedAt desc) {${postFields}}`;

export const GET_POST = `*[_type == "post" && slug.current == $slug] [0] {
        content,
        ${postFields}
      }
`;

export const GET_RELATED = `*[_type == "post" && category->.name == $category && _id != $currentId]  | order(date desc, _updatedAt desc) {
  ${postFields}
}
`;

export const GET_SLUGS = `*[_type == "post"] {"slug": slug.current}`;

export const GET_CATEGORIES = `*[_type == "category"]`;
