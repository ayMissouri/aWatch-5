import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

import '../style.css';

const app = createApp(App);

window.getTopMovies = async function () {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=c45ad94907215e117fb3a6851e09e11c'
  );
  return response.data.results;
};

window.getTopShows = async function () {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=c45ad94907215e117fb3a6851e09e11c'
  );
  return response.data.results;
};

window.getLogo = async function (id, title) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=c45ad94907215e117fb3a6851e09e11c`
  );

  let finalLogo = null;

  response.data.logos.forEach((logo) => {
    if (logo.iso_639_1 === 'en') {
      finalLogo = logo.file_path;
      return;
    } else {
      return;
    }
  });

  return finalLogo;
};

window.getVideo = async function (id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=c45ad94907215e117fb3a6851e09e11c`
  );

  for (const video of response.data.results) {
    if (video.type === 'Trailer') {
      console.log(video.key);
      return video.key;
    } else return null;
  }
};

app.use(router);
app.mount('#app');

// c45ad94907215e117fb3a6851e09e11c
