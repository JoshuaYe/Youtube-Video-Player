import axios from 'axios';

const KEY = 'AIzaSyDafEc0ThFf0MWxbZqALkaDS465Bzk0PIc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});