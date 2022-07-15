import React, {useState, useEffect} from "react";
import "./Home.css";
import SongCard from "../../SongCard/SongCard";



const Home = () => {

  const [songs, setSongs] = useState();

  const [sortStatus, setSortStatus] = useState(true);

  

  const handleSort = () => {
    if (sortStatus) {
       songs && songs.tracks.data.sort((a, b) => a.duration - b.duration);
        setSortStatus(!sortStatus);
    } else {
       songs && songs.tracks.data.sort((a, b) => b.duration - a.duration);
        setSortStatus(!sortStatus);
    }
  }


  useEffect(() => {
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart", {
      method: "GET",
      mode: "cors",
    })
      .then((response) => {
        if (response.status >= 400) {
          throw { error: "No songs found" };
        }
        return response.json();
      })
      .then((data) => setSongs(data)) 
      .catch((err) => {
        console.log(err, "catch error");
      });
  }, []);

  console.log(songs, "testtest");



return (
  <div className="title">
      <h1>TOP 10</h1>
          <select className="selectSpace" onChange={handleSort}>
               <option >Longest</option>
               <option >Shortest</option>  
          </select>
  <div className="wrapper">
     <div className="songContainer">
                {
                  songs && songs.tracks.data.map((song,i) => {
                    console.log(song, "pjesma");
                    return(
                      <div>
                      <SongCard song={song} setSongs={setSongs} />
                        </div>
                      )
                    }
                  )
                }
           </div>
     </div>
  </div>
)
}


export default Home;