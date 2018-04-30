import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = (props) => {
  const results = props.data;
  let photos;

  // If there are results, display them, otherwise return NotFound page;
  if(results.length > 0)  {
    photos = results.map(photo => <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} /> );
  } else {
    photos = <NotFound />
  }

  return (
    <div className="photo-container">
      {results.length > 0
      ? <h2>Results</h2>
      :null}
      <ul>
        {photos}
      </ul>
    </div>
  );
}

export default PhotoContainer;
