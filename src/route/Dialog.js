import React, { Component } from 'react';
import '../style/Dialog.css';

export default class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            dragging: false,
            stylesList: [],
        }

        this._dragStart = this._dragStart.bind(this);
        this._dragging = this._dragging.bind(this);
        this._dragEnd = this._dragEnd.bind(this);
    }

    _dragStart(e, i) {
        console.log("_dragStart")
        this.setState({
            x: e.screenX - e.currentTarget.getBoundingClientRect().left,
            y: e.screenY - e.currentTarget.getBoundingClientRect().top,
            dragging: true
        });
    }

    _dragging(e, i) {
        console.log("_dragging")
        if (this.state.dragging) {
            var left = e.screenX - this.state.x;
            var top = e.screenY - this.state.y;
            console.log(left, top);

            const stylesList = this.state.stylesList;
            stylesList[i] = { left: left, top: top };
            this.setState({
                stylesList: stylesList
            });
        }
    }

    _dragEnd(e, i) {
        console.log("_dragEnd")
        console.log(e)

        this.setState({
            dragging: false
        });
    }
    
    //var classes = this.props.show ? 'Dialog' : 'Dialog hidden';
    //var items = this.props.item;
    // console.log("items", this.props.item);
    render() {
        const theFlower = localStorage.getItem("flowers");
        console.log(theFlower);
        let flowerArray;
        if(theFlower != null){
            flowerArray = theFlower.split(",");
            console.log(flowerArray);
        }else {
            flowerArray = [];
        }
        return (
            <div>
                {flowerArray.map((item, idx) =>
                    <div className={"Dialog"} style={this.state.stylesList[idx]}
                    onMouseDown={(e) => this._dragStart(e, idx)}
                    onMouseMove={(e) => this._dragging(e, idx)}
                    onMouseUp={(e) => this._dragEnd(e, idx)}>
                        {item}
                        {/* {this.props.itemFriends.map((item) => <p>{item}</p>)} */}
                    </div>
                )}

                {/* <div className={"Dialog1"}> 🎈</div>
            <div className={"Dialog2"}> 🌻</div>
            <div className={"Dialog3"}> 🍀</div>
            <div className={"Dialog4"}> 🌵</div>
            <div className={"Dialog5"}> 🌿</div>
            <div className={"Dialog6"}> 🌳</div> */}
            </div>
        );
    }
}



