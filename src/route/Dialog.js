import React, { Component } from 'react';
import '../style/Dialog.css';

export default class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diffX: 0,
            diffY: 0,
            dragging: false,
            styles: {},
            
        }

        this._dragStart = this._dragStart.bind(this);
        this._dragging = this._dragging.bind(this);
        this._dragEnd = this._dragEnd.bind(this);
    }

    _dragStart(e) {
        console.log("_dragStart")
        this.setState({
            diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
            diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
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

    //var classes = this.props.show ? 'Dialog' : 'Dialog hidden';
    //var items = this.props.item;
    // console.log("items", this.props.item);
    render(){
        const a = "🎄"
        // const itemFriends= ["🎄", "🎈", "🎃"]
        return (
           <div>
            <div className={"Dialog"} style={this.state.styles}
                    onMouseDown={this._dragStart}
                    // onMouseMove={this._dragging}
                    onMouseUp={this._dragEnd}
                    onMouseLeave={this._dragEnd}
                > 🎄
                 {/* {this.props.itemFriends.map((item) => <p>{item}</p>)} */}
              </div>

            <div className={"Dialog1"} style={this.state.styles}
            onMouseDown={this._dragStart}
            // onMouseMove={this._dragging}
            onMouseUp={this._dragEnd}
            onMouseLeave={this._dragEnd} onMouseMove ={this._dragging}
            > 🎈
            {/* {this.props.itemFriends.map((item) => <p>{item}</p>)} */}
            </div>
            </div>
            );
        }
    }
                    
              
      
