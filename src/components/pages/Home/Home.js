import React, {useState, useEffect} from "react";
import "./Home.css";
import SongCard from "../../SongCard/SongCard";



const Home = () => {

  const [songs, setSongs] = useState();

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
     <div>
      <SongCard songs={songs} setSongs={setSongs} /> 
           </div>

)
}


export default Home;