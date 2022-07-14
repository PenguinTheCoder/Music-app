import React from "react";  
import "./Modal.css"

const Modal = ({closeModal}) => {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="closeBtn">
        <button onClick={() => closeModal(false)}>X</button>
                 </div>
          <div className="title">
        <h1> Name of the song</h1>
        </div>
        <div className="body">
            <p>Artist</p>
        </div>
    </div>
    </div>
    )
}

export default Modal;