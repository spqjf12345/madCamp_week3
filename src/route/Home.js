import React from "react";
//import ReactDOM from "react-dom";
import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import initialData from "../initial-data";
import Column from '../Column.jsx';



// Styles
const Container = styled.div`
 display: flex;
`;

class Home extends React.Component {
  state = initialData; //initialData는 지금은 따로 파일에서 하드코딩한 상태. 이제 DB에서 어케 부를지 방법을 찾아보자.

  // 드래그가 시작되면
  onDragStart = (start, provided) => {
    document.body.style.transition = 'background-color 0.2s ease';
  }
  // 드래그를 해서 상황이 업데이트되면
  onDragUpdate = update => {
    const { destination } = update;
    const opacity = destination ?
      destination.index / Object.keys(this.state.tasks).length
      : 0;
    document.body.style.backgroundColor = `rgba(153,  141, 217, ${opacity})`;
  }
  //딱 드롭했을 때가 되면
  onDragEnd = result => {
    console.log(result);
    document.body.style.color = 'inherit';
    document.body.style.backgroundColor = 'inherit';

    const { destination, source, draggableId, type } = result;

    //Task가 옮겨졌을 때 처리하기
    if (!destination) { //이상한 아예 바깥 곳에 놓았을 경우
      return;
    }
    if ( //이전 위치와 같은 곳에 놓았을 경우
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    //여기서 잠깐... Column 옮겨졌을 때 처리하기
    if(type === 'column') {
      const newColumnOrder = Array.from(this.state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...this.state,
        columnOrder: newColumnOrder
      };
      this.setState(newState);
      return;
    }

    // persist reordering of task that has been moved within a list
    // Task가 Column 내에서 옮겨졌을 때 그 옮겨진 자리가 유지되도록 처리하기
    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        },
      };

      this.setState(newState);
      return;
    }

    // persist reordering of task that has been moved from one list to another
    // Task가 Column 너머 옮겨졌을 때 그 옮겨진 자리가 유지되도록 처리하기
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    };
    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    }
    this.setState(newState)

    // TODO: 그리고 이렇게 reorder된 index값들을 디비에 저장해야 refresh했을 때도 유지될 수 있는데, 어떻게 하지?

  };

        
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
                {this.state.columnOrder.map((columnId, index) => {
                  const column = this.state.columns[columnId];
                  const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
                  return <Column key={column.id} column={column} tasks={tasks} index={index} />;
                })}
                {provided.placeholder}
              </Container>
            )}
      
          </Droppable>
        </DragDropContext>
    
       
    );
  }
}

export default Home;
