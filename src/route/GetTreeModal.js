import {Modal, Button} from 'react-bootstrap'
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

// class GetTreeModal extends React.Component {
//     constructor(props) {
// 		super(props);
// 		this.state = {
//         flowers: ["🌹","🌺","🌻","🌼","🌷","🍀","🌵"],
//         isOpen: false
	
// 		  }  
// 		};  
//     render(){
//         return(
//             <Modal.Dialog>
//         <Modal.Header closeButton>
//           <Modal.Title> Congratulations!</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>You've got your Flower:\n${this.state.flowers}</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant= "secondary"> close</Button>
//           <Button variant= "secondary"> Ok</Button>
//         </Modal.Footer>
//       </Modal.Dialog>
//         );
//     }

// }
export default GetTreeModal;