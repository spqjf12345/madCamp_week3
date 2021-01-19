import React from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Task from './Task.jsx';
import {Button} from 'react-bootstrap';

// Styles
const Container = styled.div`
	margin: 8px;
	border: 1px solid lightgrey;
	background-color: white;
	border-radius: 5px;
	width: 220px;

	display: flex;
	flex-direction: column;
`;
const Title = styled.h3`
	padding: 8px;
`;
const TaskList = styled.div`
	padding: 8px;
	transition: background-color 0.2s ease;
	background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'inherit')};
	flex-grow: 1;
	min-height: 100px;
`;

export default class Column extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			showComponent: false,
			indexTask: 0,
			key:0,
			
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		//add 버튼 클릭 시 수행 되어야 할 일
		console.log("button click")
		this.setState({
	
			key: this.state.key+1,
			indexTask: this.state.indexTask,
			showComponent: true
		});
	}
	render() {
		return (
			<div>
			<Draggable draggableId={this.props.column.id} index={this.props.index}>
				{provided => (
					<Container
						{...provided.draggableProps}
						ref={provided.innerRef}
					>
						<Title {...provided.dragHandleProps}>
							{this.props.column.title}
						</Title>
						<Button type = "button" onClick= {this.handleClick}>add</Button>

						
						<Droppable droppableId={this.props.column.id} type="task">
							{(provided, snapshot) => (
								<TaskList
									ref={provided.innerRef}
									{...provided.droppableProps}
									
									isDraggingOver={snapshot.isDraggingOver}>
									{/* task 수정 필요 */}
									{this.state.showComponent ? <Task key={this.state.key} task={""} index={this.state.indexTask}/> : null}
									{/* {console.log(`showComponent is ${this.state.showComponent}`)}
									{console.log(`key is ${this.state.key}`)}
									{console.log(`indexTask is ${this.state.indexTask}`)} */}
									
									{this.props.tasks.map((task, index) => (
										<Task key={task.id} task={task} index={index} />
										
									))}
									{provided.placeholder}
								</TaskList>
							)}
						</Droppable>
					</Container>
				)}
			</Draggable>
			</div>
		);
	}
}
