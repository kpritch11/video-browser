import React from 'react';

const VideoDetail = ({video}) => {
    const videoID = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoID}` // ES6 for 'https://www.youtube.com/embed/' + videoID // note ES6 string interpolation uses `` and regular uses ''
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;
