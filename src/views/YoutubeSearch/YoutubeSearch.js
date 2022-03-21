import './YoutubeSearch.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

function YoutubeSearch() {
    const [videos, setVideos] = useState([])
    const [searchInput, setSearchInput] = useState('')


    // useEffect(() => {

    // }, [])

    const handleSearch = () => {
        if (searchInput) {
            axios({
                "method": "GET",
                "url": 'https://www.googleapis.com/youtube/v3/search',
                "params": {
                    part: 'snippet',
                    maxResults: '10',
                    key: 'AIzaSyBoEaTzLOPRwiparJI2pjDHZcH2JZF7rAs',
                    type: 'video',
                    q: searchInput
                }
            })
                .then((res) => {
                    if (res && res.data.items) {
                        let items = res.data.items
                        let result = []
                        if (items && items.length > 0) {
                            items.map(item => {
                                let obj = {}
                                obj.id = item.id.videoId
                                obj.title = item.snippet.title
                                obj.createAt = item.snippet.publishTime
                                obj.author = item.snippet.channelTitle
                                obj.description = item.snippet.description
                                result.push(obj)
                                return result
                            })
                        }
                        setVideos(result)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    console.log(videos);
    return (
        <div className="yt-container">
            <div className="yt-search">
                <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button
                    type="button"
                    className="btn btn-default"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            {videos && videos.length > 0 && videos.map(item => (
                <div className="yt-result" key={item.id}>
                    <div className="left">
                        <iframe
                            width="100%"
                            height="100%"
                            src={`http://www.youtube.com/embed/${item.id}`}
                            title={item.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>

                        </iframe>
                    </div>
                    <div className="right">
                        <div className="title">
                            {item.title}
                        </div>
                        <div className="time">
                            {item.createAt}
                        </div>
                        <div className="author">
                            {item.title}
                        </div>
                        <div className="description">
                            {item.description}
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default YoutubeSearch
