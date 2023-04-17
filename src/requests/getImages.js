 import axios from "axios";

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    const API_URL = `https://images-api.nasa.gov/search?media_type=image&year_start=1920&year_end=2023&q=`;
    const API_KEY = 'your_api_key_here';

    return axios
      .get(`${API_URL}${query}`, {
        headers: { 'Authorization': API_KEY }
      })
      .then((response) => {
        const imageResults = response.data.collection.items;
        const parsedImages = imageResults.filter(item => item.data[0].media_type === 'image');
        const images = parsedImages.map(item => item.links[0].href);
        return images;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default getImages;
