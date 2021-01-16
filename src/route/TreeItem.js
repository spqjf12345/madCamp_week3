import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Button } from 'react-bootstrap';
import '../style/TreeItem.css'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import initialData from "../initial-data";
import TreeColumn from "./TreeColumn";


class TreeItem extends React.Component {
	tree = ["🍋", "🍊", "🍈"];
	level = ["❤", "🧡", "💛", "💚", "💜", "🤎", "🖤"];
	state = initialData;

	onDrag = (event, todo) => {
		event.preventDefault();
		this.setState({
			draggedTask: todo
		});
	}

	onDragOver = (event) => {
		event.preventDefault();
	}

	onDrop = (event) => {
		const { completedTasks, draggedTask, todos } = this.state;
		this.setState({
			completedTasks: [...completedTasks, draggedTask],
			todos: todos.filter(task => task.taskID !== draggedTask.taskID),
			draggedTask: {},
		})
	}

	render() {
		return (
			<DragDropContext
			onDragEnd={this.onDragEnd}
			onDragStart={this.onDragStart}
			onDragUpdate={this.onDragUpdate}
		>
			<Droppable
				droppableId="all-columns"
				direction="horizontal"
				type="column"
			>
				{provided => (
					<Container
						{...provided.droppableProps}
						ref={provided.innerRef}
					>
						{/* { const treeColumn = this.state.treeColumn["tree-column-1"];}
						{ this.state.treeColumn["tree-column-1"].treeTasks.map(treeId => this.state.treeTasks[treeId])
							return <TreeColumn key={treeColumn.id} column={treeColumn} tasks={treeTasks} index={index} /> */}
			
				
					{/* {this.state.treeColumn.map((treeId) => {
						this.state.treeTask[treeId];
						return <TreeTask key={treeTask.id} column={"tree_column"} icon={treeTask.icon} />
					)} */}

					{provided.placeholder}
					</Container>
				)}
			</Droppable>
		</DragDropContext>
		)

	}
}

export default TreeItem;