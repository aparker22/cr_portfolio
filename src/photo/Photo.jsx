import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Photo() {
  const [data, setData] = useState("https://images.unsplash.com/photo-1493407285720-4396968bcf9e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjgzMzc3fQ");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://api.unsplash.com/photos/random/?client_id=8acb7ab988121e67d0d201003dbebdcb0fb1596cff7497c7503482e8ecead3ab&query=nature',
      );
      setData(result.data.urls.full);
    };

    fetchData();
  }, []);
  return (
    <div className="photo"><img className="photo-img" src={`${data}`}/></div>
  );
}

export default Photo;