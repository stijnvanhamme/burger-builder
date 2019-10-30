import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-17d79.firebaseio.com/'
});

export default instance;