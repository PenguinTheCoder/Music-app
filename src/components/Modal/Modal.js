import React from "react";  
import "./Modal.css"

const Modal = ({closeModal, song}) => {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="closeBtn">
                    <button onClick={() => closeModal(false)}>X</button>
                 </div>
                    <div className="title">
                         <h1> {song.title} </h1>
                     </div>
                        <div className="body">
                                <p>Ranked: {song.position}.</p>
                                <p>Artist: {song.artist.name}</p>
                                <p>Duration: {new Date(song.duration* 1000).toISOString().substring(14, 19)}</p>
                            <div className="btn">
                                <a href={song.preview} rel="noopener noreferrer" target="_blank">
                                <button className="button1">Preview</button>
                                </a>
                            </div>
                         </div>
                </div>
         </div>
    )
}

export default Modal;