import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import "../style/Test.css"
const tree = ["🍋", "🍊", "🍈"];
const ground = ["🎅", "👩‍🎤", "👼", "👩‍🦰","👨‍🦱", "👱‍♀️", "👨", "🧒"]
// const extension = ["👨‍🦱", "👱‍♀️", "👨", "🧒"]
// [["👨‍🦱", "👱‍♀️", "👨", "🧒"],
//  ["👩‍🦳", "👸", "🙂","😠"],
//  ["😔","😖","🙁","🤬"],
//  ["🥶", "😦","🤢", "😈"]];

// // fake data generator
// const getItems = (count, offset = 0) =>
//     Array.from({ length: count }, (v, k) => k).map(k => ({
//         id: `item-${k + offset}`,
//         content: `item ${k + offset}`
//     }));
// const groundList =(count, offset =0)=> 
// const array
// (tree.map((items, index) => {
//     {items.map((subItem, sIndex) =>{
//         id: `item==${sIndex + offset}`,
//         content: tree [sIndex + offset] 
//     })}
// }))


const treeList = (count, offset = 0) =>
    Array.from({length: count},(v, k) => k).map(k => ({
        id: `item==${k + offset}`,
        content: tree [k+ offset] 
    }))

const groundList = (count, offset = 0) =>
    Array.from({length: count},(v, k) => k).map(k => ({
        id: `ite==${k + offset}`,
        content: ground [k+ offset] 
    }))

// const extensionList = (count, offset = 0) =>
// Array.from({length: count},(v, k) => k).map(k => ({
//     id: `ite==${k + offset}`,
//     content: extension [k+ offset] 
// }))


// a little function to help us with reordering the result
// const reorder = (list, startIndex, endIndex) => {
//     const result = Array.from(list);
//     const [removed] = result.splice(startIndex, 1);
//     result.splice(endIndex, 0, removed);

//     return result;
// };

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};


const move = (source, destination, droppableSource, droppableDestination) => {
    //source 움직인 쪽의 리스트, destClone 목적지 쪽의 리스트
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    console.log(sourceClone)
    console.log(destClone)

    const [removed] = sourceClone.splice(droppableSource.index, 1);
    //옮겨진 아이템 [removed]
    console.log([removed])
    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const grid = 20;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid ,
    margin: `${grid}px ${grid}px ${grid}px ${grid}px`,

    // change background colour if dragging
    background: isDragging ? 'grey' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightgrey' : 'lightgrey',
    padding: grid,
    width: 250
});

class test extends React.Component {
    state = {
        items: treeList(3),
        //selected: extension[4][4]
        selected: groundList(8),
        //extension: extensionList(4)
    };

    id2List = {
        droppable: 'items',
        droppable2: 'selected',
        //droppable3: 'extension'

    };

    getList = id => this.state[this.id2List[id]];
  
    onDragEnd = result => {
        const { source, destination } = result;
        // dropped outside the list
        if (!destination) {
            return;
        }
        //자기 자신으로 움직이는 경우 
        if (source.droppableId === destination.droppableId) {
            const items = reorder(this.getList(source.droppableId),source.index,destination.index);
            let state = { items };
            const newState = [state]
            newState[source.droppableId] = items;
            this.setState(newState)
            
            //this.setState(state);
            // //모르겠음
            // if (source.droppableId === 'droppable2') {
            //     state = { selected: items };
            // }

        } else {
            //움직인 상태 결과 값 
            const result = move(this.getList(source.droppableId),this.getList(destination.droppableId),source,destination);
            //this.setState({items: result.droppable, selected: result.droppable2//, extension = result.droppable3
            const newState = [this.state.selected]
            newState[source.droppableId] = result[source.droppableId];
            newState[destination.droppableId] = result[destination.droppableId]
            this.setState(newState.filter(group => group.length))
            
            }
        }
    render() {
        return (
            <div>
                <button type = "button" onClick ={() => {this.setState([this.state.selected,[]]);}} >add new group</button>
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div class = "droppable">
                <Droppable droppableId="droppable" direction = "horizontal">
                    {(provided, snapshot) => (
                        <div 
                            ref={provided.innerRef}
                            
                            style={getListStyle(snapshot.isDraggingOver)}>
                                <p>tree</p>
                                <div class = "item">
                            {this.state.items.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}>
                                    {(provided, snapshot) => (
                                        <div 
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}>
                                            {item.content}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            </div>
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                </div>
                <div className = "droppable2">
                <Droppable droppableId="droppable2">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            
                            style={getListStyle(snapshot.isDraggingOver)}>
                                <p>garden</p>
                                <div className = "item">
                            {this.state.selected.map((item, index) => (
            
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}>
                                            {item.content}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            </div>
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                </div>
                <div className = "div2">
                {/* <Droppable droppableId="droppable3">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.extension.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}>
                                            {item.content}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable> */}
                </div>
            </DragDropContext>
            </div>
        );
    }
}


export default test;
