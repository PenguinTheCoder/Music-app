import React from "react";
import {useState} from "react";
import "./SongCard.css";
import Modal from "../Modal/Modal.js";

const SongCard = ({ song }) => {

    const [openModal, setOpenModal] = useState(false)


    return(
    <div className="openModal">
        <div className="card-wrapper">
      <div>
        <img className="photo" src={song.album.cover_medium} alt="song img" />
      </div>
      <div>
        <div>
          <p className="artist">Artist: {song.artist.name}</p>
          <p className="songName">Song Name: { song.title} </p>
          <div className="card-button-wrapper">
          <buttton className="button1" onClick={() => {setOpenModal(true)}}>Info</buttton>
          
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