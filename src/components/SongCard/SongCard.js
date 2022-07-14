import React from "react";
import {useState} from "react";
import "./SongCard.css";
import Modal from "../Modal/Modal.js";

const SongCard = ({songs, setSongs, song}) => {

    const [openModal, setOpenModal] = useState(false)


    return(
<div>
    <div className="title">
        <header>
      <h1>TOP 10</h1>
        </header>
        </div>
        <div className="card-wrapper">
      <div>
        <img src={songs && songs.tracks.data.map(song => {return song.album.cover_small})} alt="song img" />
      </div>
      <div>
        <div>
          <p className="artist">Artist: {songs && songs.tracks.data.map(song => {return song.artist.name})}</p>
          <p className="songName">Song Name: {songs && songs.tracks.data.map(song => {return song.title} )}</p>
          <div className="card-button-wrapper">
          <buttton className="edit" onClick={() => {setOpenModal(true)}}>Info</buttton>
          
          </div>       
        </div>
      </div>
    </div>
    <div className="ispod">
    {openModal && <Modal closeModal={setOpenModal}/>}
    </div>
    </div>

    )
}

export default SongCard;