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
   
    //fetch('https://api.unsplash.com/search/photos?client_id=uLplTaJQ5CJ7KXynUEEVKckSNlEur_XoEbKHmiSdD74&query=dog&page=1&per_page=1&orientation=landscape')
    fetch('https://api.unsplash.com/photos/random/?client_id=uLplTaJQ5CJ7KXynUEEVKckSNlEur_XoEbKHmiSdD74&query=lansdcape&orientation=landscape')
    //fetch('https://randomuser.me/api/?results=500')
    .then(res => {return res.json();})
    .then(data => {
      console.log('imgUrl')
       console.log(data.urls.raw)
       setUrl(data.urls.raw);
        //opacity: 0.7,
    })
    .catch(console.log)
  }, [])


  return ( 
    <>
      <div>
        {/* {url} */}
        <img src={url.toString()} alt="" style={{ width:'100%',height:760, position: 'fixed' }} />
      </div>
      
    </>
  );

}

export default ImgBackground;