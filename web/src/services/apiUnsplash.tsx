import axios from 'axios';

const apiUnsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:'Client-ID uLplTaJQ5CJ7KXynUEEVKckSNlEur_XoEbKHmiSdD74'
    //Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
  }
});

// import Unsplash from 'unsplash-js';

// const apiUnsplash = new Unsplash({ accessKey: "uLplTaJQ5CJ7KXynUEEVKckSNlEur_XoEbKHmiSdD74" });

  export default apiUnsplash;