// import React from "react";
// import TreeTask from "./TreeTask";
// import styled from 'styled-components';
// import { Droppable, Draggable } from 'react-beautiful-dnd';

// // Styles
// const Container = styled.div`
// 	margin: 8px;
// 	border: 1px solid lightgrey;
// 	background-color: white;
// 	border-radius: 5px;
// 	width: 220px;

// 	display: flex;
// 	flex-direction: column;
// `;
// const Title = styled.h3`
// 	padding: 8px;
// `;
// const TaskList = styled.div`
// 	padding: 8px;
// 	transition: background-color 0.2s ease;
// 	background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'inherit')};
// 	flex-grow: 1;
// 	min-height: 100px;
// `;


// class TreeColumn extends React.Component {
//     render() {
// 		return (
// 			<Draggable index={this.props.index}>
// 				{provided => (
// 					<Container
// 						{...provided.draggableProps}
// 						ref={provided.innerRef}
// 					>
// 						<Droppable type="treeTask">
// 							{(provided, snapshot) => (
// 								<TaskList
// 									ref={provided.innerRef}
// 									{...provided.droppableProps}
// 									isDraggingOver={snapshot.isDraggingOver}>
// 									{this.props.treeTask.map((task, index) => (
// 										<TreeTask key={task.icon} task={task} index={index} />
// 									))}
// 									{provided.placeholder}
// 								</TaskList>
// 							)}
// 						</Droppable>
// 					</Container>
// 				)}
// 			</Draggable>
// 		);
// 	}
// }
// export default TreeColumn;