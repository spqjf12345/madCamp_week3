import React from "react"

const GetTreeModal = ({handleClose, show, children}) =>{
    const showCloseClassName = show ? "modal display-block" : "modal display-noe";
    return(
        <div className={showCloseClassName}>
            <section className = "modal-main">
                {children}
                <button type = "button" onClick = {handleClose}>
                    close
                </button>
            </section>
        </div>
    );
};

export default GetTreeModal;