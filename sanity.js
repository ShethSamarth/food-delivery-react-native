/* eslint-disable quotes */
import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: 'zsmtzrcd',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-25',
});

const builder = imageUrlBuilder(client);
export const urlFor = source => builder.image(source);

export const getFeaturedCategories = async () => {
  const featuredCategories = await client
    .fetch(
      `*[_type == "featured"] {...,restaurants[]->{ ...,dishes[]->,type-> {name}}}`,
    )
    .then(data => {
      return data;
    });

  return featuredCategories;
};

export const getRestaurants = async id => {
  const restaurants = await client
    .fetch(
      `*[_type == "featured" && _id == $id] {...,restaurants[]->{ ...,dishes[]->,type-> {name}}} [0]`,
      {id},
    )
    .then(data => {
      return data;
    });

  return restaurants;
};

export const getCategories = async () => {
  const categories = await client
    .fetch(`*[_type == "category"] | order(_createdAt asc)`)
    .then(data => {
      return data;
    });

  return categories;
};
