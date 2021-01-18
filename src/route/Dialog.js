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
            // itemFriends: ["🎄", "🎈", "🎃"]
        }

        this._dragStart = this._dragStart.bind(this);
        this._dragging = this._dragging.bind(this);
        this._dragEnd = this._dragEnd.bind(this);
    }

    _dragStart(e) {
        console.log(e)
        this.setState({
            diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
            diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
            dragging: true
        });
    }

    _dragging(e) {
        console.log("_dragging");
        if (this.state.dragging) {
            var left = e.screenX - this.state.diffX;
            var top = e.screenY - this.state.diffY;
            this.setState({
                styles: {
                    left: left,
                    top: top
                }
            });
        }
    }

    _dragEnd() {
        console.log("_dragEnd");
        this.setState({
            dragging: false
        });
    }

    //var classes = this.props.show ? 'Dialog' : 'Dialog hidden';
    //var items = this.props.item;
    // console.log("items", this.props.item);
    render(){
        return (
            <div>
            <div className={"Dialog"}
                    style={this.state.styles}
                    onMouseDown={this._dragStart}
                    onMouseMove={this._dragging}
                    onMouseUp={this._dragEnd}
                    onMouseLeave={this._dragEnd}
                > 
              
                    
                    <p className='DialogTitle'>{this.props.itemFriends[0]}</p>
                 

                    <p className='DialogTitle'>{this.props.itemFriends[1]}</p>
                  

                    <p className='DialogTitle'>{this.props.itemFriends[2]}</p>
                
                </div>
{/* 
                <div className={'newDialog'} style={this.state.styles} 
                onMouseDown={this._dragStart} 
                onMouseMove={this._dragging} 
                onMouseUp={this._dragEnd}
                onMouseLeave={this._dragEnd}
                >
                </div>
                <div className={'newDialog2'} style={this.state.styles} 
                onMouseDown={this._dragStart} 
                onMouseMove={this._dragging} 
                onMouseUp={this._dragEnd}
                onMouseLeave={this._dragEnd}
                >
                                                              
                      
                </div> */}
    
               </div>
        );
    }
}