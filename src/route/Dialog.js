import React, { Component } from 'react';
import '../style/Dialog.css';
//속성 값과 함수를 같이 써서 문제가 되는 듯하다
export default class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            dragging: false,
            styles1: {},
        }
       
        this._dragStart = this._dragStart.bind(this);
        this._dragging = this._dragging.bind(this);
        this._dragEnd = this._dragEnd.bind(this);
    }

    _dragStart(e) {
        console.log("_dragStart")
        this.setState({
            x: e.screenX - e.currentTarget.getBoundingClientRect().left,
            y: e.screenY - e.currentTarget.getBoundingClientRect().top,
            dragging: true
        });
    }

    _dragging(e) {
        console.log("_dragging")
        if (this.state.dragging) {
            var left = e.screenX - this.state.diffX;
            var top = e.screenY - this.state.diffY;
            console.log(left, top);
            this.setState({styles: {left: left, top: top }   
            });
        }
    }

    _dragEnd() {
        console.log("_dragEnd")
        this.setState({
            dragging: false
        });
    }

    render(){
        return (
           <div>
               
            <div className={"Dialog"} style={this.state.styles}
                    onMouseDown={this._dragStart}
                    onMouseMove={this._dragging}
                    onMouseUp={this._dragEnd}
                    onMouseLeave={this._dragEnd}> 🎄 </div>

            <div className={"Dialog1"}> 🎈</div>
            <div className={"Dialog2"}> 🌻</div>
            <div className={"Dialog3"}> 🍀</div>
            <div className={"Dialog4"}> 🌵</div>
            <div className={"Dialog5"}> 🌿</div>
            <div className={"Dialog6"}> 🌳</div>

            </div>
            );
        }
    }
                    
              
      
