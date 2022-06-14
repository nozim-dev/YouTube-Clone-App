import { useState } from "react";
import URL from "./components/api/URL";
import ListVideos from "./components/ListVideos";
import Search from "./components/Search";
import Video from "./components/Video";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState({id:{},snippet:{}});  //uzgarish

  async function videoSubmit(searchTerm) {
    const {
      data: { items: videos },
    } = await URL.get("search", {
      params: {
        part: "snippet",
        maxResult: 5,
        key: "AIzaSyCy0k_MGHm-Tzuxa_J2s2l4nm0hPbDlkX4",
        q: searchTerm
      },
    });
    console.log(videos);
    setVideos(videos);
    setSelectedVideos(videos[0]);
  }

  return (
    <>
      <div className="SearchBox">
        <Search onSubmit={videoSubmit} />
      </div>
      <div className="VideoMain">
        <div className="videos">
          <Video video={selectedVideos}/>
        </div>
        <div className="videoList">
          <ListVideos videos={videos} onVideoSelect={setSelectedVideos}/>
        </div>
      </div>
    </>
  );
}

export default App;

// AIzaSyCy0k_MGHm-Tzuxa_J2s2l4nm0hPbDlkX4
