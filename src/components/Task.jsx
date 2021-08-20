import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

// Styles
const Container = styled.div`
   border: 1px solid lightgrey;
   border-radius: 2px;
   padding: 8px;
   margin-bottom: 8px;
  background-color: ${props => (
		props.isDragDisabled ? 'lightgrey' : props.isDragging ? 'lightgreen' : 'white')};
`;

function onClickEditHandler(e) {
	const answer = prompt("수정 내용을 입력하세요.")
	console.log(answer)
}
function onClickDeleteHandler(e) {
	alert("삭제하시겠습니까?")
}

export default class Task extends React.Component {
	render() {
		const isDragDisabled = this.props.task.isDone === true;
		return (
			<Draggable
				draggableId={this.props.task.id}
				index={this.props.index}
				isDragDisabled={isDragDisabled}
			>
				{(provided, snapshot) => (
					<Container
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
						isDragging={snapshot.isDragging}
						isDragDisabled={isDragDisabled}
					>
						<div>
							{this.props.task.content}
						</div>
						{<button className="editBtn" onClick={onClickEditHandler}>Edit</button>}
						{<button className="deleteBtn" onClick={onClickDeleteHandler}>Delete</button>}
					</Container>
				)}
			</Draggable>
		)
	}
}
