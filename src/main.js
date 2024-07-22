import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import mitt from 'mitt';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const api_key = import.meta.env.VITE_TMDB_API_KEY;

import '../style.css';

const emitter = mitt();
const app = createApp(App);

window.getTopMovies = async function () {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${api_key}`
  );
  return response.data.results;
};

window.getExploreMovies = async function (genres, year, order, country, type, page) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${genres}`
  );
  return response.data.data;
};

window.getTopShows = async function () {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${api_key}`
  );
  return response.data.results;
};

window.getNetworks = async function () {
  const response = await axios.get(`https://api.awatch.fun/lists/name/networks`);
  console.log(response.data.data);
  return response.data.data;
};

window.getStudios = async function () {
  const response = await axios.get(`https://api.awatch.fun/lists/name/studios`);
  return response.data.data;
};

window.getMovieGenres = async function () {
  const response = await axios.get(`https://api.awatch.fun/lists/name/movie-genres`);
  return response.data.data;
};

window.getSeriesGenres = async function () {
  const response = await axios.get(`https://api.awatch.fun/lists/name/tv-genres`);
  return response.data.data;
};

window.getLogo = async function (id, title) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${api_key}`
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
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${api_key}`
  );

  for (const video of response.data.results) {
    if (video.type === 'Trailer') {
      console.log(video.key);
      return video.key;
    } else return null;
  }
};

window.signUp = async function (name, email, password) {
  // console.log(name, email, password);
  const response = await axios.post('https://api.awatch.fun/user/signup', {
    name: name,
    email: email,
    password: password,
  });
  return response.data;
};

window.login = async function (name,  password) {
  // console.log(name, email, password);
  const response = await axios.post('https://api.awatch.fun/user/login', {
    email: name,
    password: password,
  });
  return response.data;
};

window.getUserToken = function () {
  return localStorage.getItem('token');
}

window.getProfile = async function () {
  const response = await axios.get('https://api.awatch.fun/user', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
}

app.config.globalProperties.emitter = emitter;
app.use(router);
app.use(ElementPlus)
app.mount('#app');

// c45ad94907215e117fb3a6851e09e11c
