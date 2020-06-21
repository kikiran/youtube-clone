import React from 'react';
import './Video.css';

const VideoItem = ({video, onSelectVideo}) => {
    return ( 
        <div className="video-item item" onClick={() => onSelectVideo(video)}>
        <img className="ui image" src={video.snippet.thumbnails.medium.url} alt="not found" />
          <div className="content"> 
            <div className="header">
                { video.snippet.title }
            </div>
          </div> 
        </div>
     );
}
 
export default VideoItem;