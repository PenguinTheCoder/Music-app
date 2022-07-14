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
            <p>{song.artist.name}</p>
            <p>{song.artist.name}</p>
        </div>
    </div>
    </div>
    )
}

export default Modal;