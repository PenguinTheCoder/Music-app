import React from "react";
import {useState} from "react";
import "./SongCard.css";
import Modal from "../Modal/Modal.js";

const SongCard = ({ song, setSongs}) => {

    const [openModal, setOpenModal] = useState(false)


    return(
    <div>
        <div className="card-wrapper">
      <div>
        <img src={song.album.cover_small} alt="song img" />
      </div>
      <div>
        <div>
          <p className="artist">Artist: {song.artist.name}</p>
          <p className="songName">Song Name: { song.title} </p>
          <div className="card-button-wrapper">
          <buttton className="edit" onClick={() => {setOpenModal(true)}}>Info</buttton>
          
          </div>       
        </div>
      </div>
    </div>
    <div className="ispod">
    {openModal && <Modal closeModal={setOpenModal} song={song}/>}
    </div>
    </div>

    )
}

export default SongCard;