import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Button } from 'react-bootstrap';
import '../style/TreeItem.css'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

class TreeItem extends React.Component {
    flowers = ["🍋", "🍊", "🍈"];
    level =["❤","🧡","💛","💚","💜","🤎","🖤"];

    onDrag = (event, todo) => {
        event.preventDefault();
        this.setState({
            draggedTask : todo
        });
    }

    onDragOver = (event) => {
        event.preventDefault();
      }

    onDrop = (event ) => {
    const { completedTasks, draggedTask, todos } = this.state;
    this.setState({
        completedTasks: [...completedTasks, draggedTask],
        todos: todos.filter(task => task.taskID !== draggedTask.taskID),
        draggedTask: {},
    })
    } 

    render(){
        return(
            flowers
          
        );
    }
}

export default TreeItem;