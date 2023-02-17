// https://pixabay.com/api/
// Your API key:33578687-dc3774f79e443000bcff80f6a
// image_type: 'photo',
// orientation: 'horizontal',
// safesearch: true,
// q,
// page,
// per_page,

// key - твой уникальный ключ доступа к API.
// q - термин для поиска. То, что будет вводить пользователь.
// image_type - тип изображения. Мы хотим только фотографии, поэтому задай значение photo.
// orientation - ориентация фотографии. Задай значение horizontal.
// safesearch - фильтр по возрасту. Задай значение true.

// import axios from 'axios';

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '33578687-dc3774f79e443000bcff80f6a';

// export default class ApiService {
//   constructor() {
//     this.page = 1;
//     this.searchQuary = '';
//     this.per_page = 20;
//   }
//   async fetchCards() {
//     const options = new URLSearchParams({
//       key: API_KEY,
//       q: this.searchQuary,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: true,
//       page: this.page,
//     });
//     try {
//       const URL = `${BASE_URL}/?${options}`;
//       this.nextPage();

//       return await axios.get(URL);
//     } catch (error) {
//         console.error(error);
//     }
//   }

//   nextPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get quary() {
//     return this.searchQuary;
//   }

//   set quary(newQuary) {
//     this.searchQuary = newQuary;
//   }
// }
import axios from 'axios';

export default async function fetchImages(value, page) {
  const URL = 'https://pixabay.com/api/';
  const KEY = '33578687-dc3774f79e443000bcff80f6a';
  const FILTER = `?key=${KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

  return await axios.get(`${URL}${FILTER}`).then(response => response.data);
}