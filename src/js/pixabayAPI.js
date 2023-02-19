import axios from 'axios';

export default async function fetchImages(value, page) {
  const URL = 'https://pixabay.com/api/';
  const KEY = '33578687-dc3774f79e443000bcff80f6a';
  const FILTER = `?key=${KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

  return await axios.get(`${URL}${FILTER}`).then(response => response.data);
}