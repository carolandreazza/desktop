import React, { useState, useEffect }  from 'react';
//const Unsplash = require('unsplash-js').default;

// interface Error {
//   name: string;
//   message: string;
// }

// const Err = (error: Error) => (
//   <div>
//     Error:${error.name} ${error.message}
//   </div>
// );

const ImgBackground = () => {
  const [url, setUrl] = useState([]);
    
  useEffect(() => {
    //console.log('useEffect')
   
    fetch('https://api.unsplash.com/search/photos?client_id=uLplTaJQ5CJ7KXynUEEVKckSNlEur_XoEbKHmiSdD74&query=landscape&page=1&per_page=1&orientation=landscape')
    //fetch('https://randomuser.me/api/?results=500')
    .then(res => {return res.json();})
    .then(data => {
      const urls = data.results.map((pic: { results: string | number | undefined; id: string; urls: { raw: string | undefined; full: string | undefined; regular: string | undefined; }; }) => {
        return( //opacity: 0.7,
          <div key={pic.id}>
            <img src={pic.urls.full} style={{ width:'100%',height:760, position: 'fixed' }} />
          </div>
        )
      });
      // const { idP, imgUrl } = urls;
      // //setdataResult();
       setUrl(urls)
      //   console.log('imgUrl')
      //   console.log(urls)
      //   console.log(url)
    })
    .catch(console.log)
  }, [])


  return ( 
    <>
      <div>
        {url}
      </div>
      
    </>
  );

}

export default ImgBackground;