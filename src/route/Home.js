import React from "react";
import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import initialData from "../initial-data";
import Column from '../components/Column.jsx';
import '../style/Home.css';
import '../style/SetTimer.css';
import SetTimer from "./SetTimer";
import sunShineImg from '../assets/images/sunshine.jpg';
import wateringImg from '../assets/images/watering.png';
import windImg from '../assets/images/wind.png';
import trimmingImg from '../assets/images/trimming.png';

// Styles
const Container = styled.div`
  display: flex;
`;

// let flowers = [];
class Home extends React.Component {
  state = initialData; //initialData는 지금은 따로 파일에서 하드코딩한 상태. 이제 DB에서 어케 부를지 방법을 찾아보자.

  // 드래그가 시작되면
  onDragStart = (startColumn, provided) => {
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
    document.body.style.color = 'inherit';
    document.body.style.backgroundColor = 'inherit';
    const { destination, source, draggableId, type } = result;

    // Task가 옮겨졌을 때 처리하기
    if (!destination) { // 1. 아예 이상한 바깥 곳에 놓았을 경우
      return;
    }
    if ( // 2. 이전 위치와 같은 곳에 놓았을 경우
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // 3. Task가 Done 칼럼으로 옮겨졌을 경우
    const rewardList = [".sunShineContainer", ".wateringContainer", ".windContainer", ".trimContainer"]
    const REWARD_COUNT = 4;
    if (destination.droppableId === 'column-3') {
      // (1) 해당 Task를 disableDraggable 한다
      const newState = {...this.state.tasks}
      newState[draggableId].isDone = true;
      this.setState({newState})

      // (2) 랜덤한 보상이미지가 나타난다(햇빛, 바람, 물 등)
      const randomIndex = Math.floor(Math.random() * REWARD_COUNT);
      const container = rewardList[randomIndex];
      const randomReward = document.querySelector(container);
      randomReward.classList.add("showing");
      setTimeout(() => {
        randomReward.classList.remove("showing");
      }, 1000)
    }

    // 여기서 잠깐... Column 자체가 옮겨졌을 때 처리하기
    if (type === 'column') {
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

    const startColumn = this.state.columns[source.droppableId];
    const finishColumn = this.state.columns[destination.droppableId];
    
    // 4. persist reordering of task that has been moved within a list
    // 4. Task가 Column 내에서 옮겨졌을 때 그 옮겨진 자리가 유지되도록 처리하기
    if (startColumn === finishColumn) {
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1); // 우선 옮겨짐 당한 Task를 원래 자리에서 없애고
      newTaskIds.splice(destination.index, 0, draggableId); // 옮긴 후의 그 자리에 끼워넣는다

      const newColumn = { // Column 내 Task들 갱신
        ...startColumn,
        taskIds: newTaskIds
      };
      const newState = { // Column 갱신
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      };

      this.setState(newState);
      return;
    }

    // 5. persist reordering of task that has been moved from one list to another
    // 5. Task가 Column 너머 옮겨졌을 때 그 옮겨진 자리가 유지되도록 처리하기
    const startTaskIds = Array.from(startColumn.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...startColumn,
      taskIds: startTaskIds
    };
    const finishTaskIds = Array.from(finishColumn.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finishColumn,
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
    
    // 6. Task가 Column 너머 옮겨졌을 때, 이제 더이상 To-do, In Progress Column에 아무 것도 없을 경우(즉 전부 Done칼럼으로 옮겨졌을 경우)
    const toDoIsNotEmpty = newState.columns["column-1"].taskIds.length;
    const InProgressIsNotEmpty = newState.columns["column-2"].taskIds.length;
    const FLOWERS = ["🌹","🌺","🌻","🌼","🌷","🍀","🌵"];
    const FLOWER_COUNT = 7;
    const LS_KEY_FLOWERS = "flowers";
      const LS_KEY_ALL_PLANT = "all_plant";

    if (!toDoIsNotEmpty && !InProgressIsNotEmpty) {
      const randomIndex = Math.floor(Math.random() * FLOWER_COUNT);
      const theFlower = FLOWERS[randomIndex];
      alert(`축하합니다!\n꽃이 자랐어요.\n${theFlower}`);

      let currentFlowers = getFlower();
      currentFlowers ? currentFlowers += ("," + theFlower) : currentFlowers = theFlower;
      saveFlower(currentFlowers);
      updatePlantCount(currentFlowers)
    }

    function getFlower(){
      return localStorage.getItem(LS_KEY_FLOWERS);
    }
    
    function saveFlower(flowers){
      localStorage.setItem(LS_KEY_FLOWERS, flowers);
    }

    function updatePlantCount(flowers){
      const currentFlowers = flowers;
      let flowerArray;
      currentFlowers ? flowerArray = currentFlowers.split(",") : flowerArray = [];
      localStorage.setItem(LS_KEY_ALL_PLANT, flowerArray.length);
    }
  };

  render() {
    return (
      <>
        <SetTimer
          toDoIsNotEmpty={this.state.columns["column-1"].taskIds.length}
          InProgressIsNotEmpty={this.state.columns["column-2"].taskIds.length}
        />
        
        <div className="sunShineContainer">
          <img src={sunShineImg} alt="sunshine" />
        </div>
        <div className="wateringContainer">
          <img src={wateringImg} alt="watering" />
        </div>
        <div className="windContainer">
          <img src={windImg} alt="wind" />
        </div>
        <div className="trimContainer">
          <img src={trimmingImg} alt="trim" />
        </div>
        
        <div className="toDoContainer">
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
        </div>
      </>
    );
  }
}

export default Home;
