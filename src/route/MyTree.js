// import React, { useState, setState } from 'react';
// import '../style/Dialog.css';

// function MyTree(){
//     //처음 position 의 위치를 50, 50 으로 설정 
//     const [pos, getPos] = useState({
//         x:50,
//         y:50
//         });
//     const getPosition = (e) => {
//         getPosition({
//             [e.target.x] : e.target.value,
//             [e.target.y] : e.target.value,
//         })
//         diffX : 10,
//         diffy : 10,
//         // this.setState({
//         //     diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
//         //     diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
//         //     dragging: true
//         // });
//         getPos(pos.x + diffX , pos.y + diffY)
//         console.log("pos ",pos.x, pos.y)
//     }
    
//     return (
//         <div onClick={getPosition}>🌸</div>
//     )
  
    
//     return(
//         <div className = "tree-item">
//             <div onMouseDown = {this.state.position} >🌸</div>
//         </div>
       
//     );
// }
 

// export default MyTree;