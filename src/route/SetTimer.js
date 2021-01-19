import React, { Component } from 'react';
import '../style/SetTimer.css';

class SetTimer extends Component {
  constructor() {
    super();
    this.state = {
      hours: 0,
      minutes: 0,
      seconds:0
    }
    this.hoursInput = React.createRef();
    this.minutesInput= React.createRef();
    this.secondsInput = React.createRef();
  }

  inputHandler = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  convertToSeconds = ( hours, minutes, seconds) => {
    return seconds + minutes * 60 + hours * 60 * 60;
  }

  startTimer = () => {
    this.timer = setInterval(this.countDown, 1000);
  }

  countDown = () => {
    const  { hours, minutes, seconds } = this.state;
    let c_seconds = this.convertToSeconds(hours, minutes, seconds);
    if ( hours === 0 &&  minutes === 0 & seconds === 0){ //time over
      if (!this.props.toDoIsNotEmpty && !this.props.InProgressIsNotEmpty){
        this.stopTimer()
      } else {
        alert(`시간이 종료되었습니다. 당신의 꽃은 죽었습니다`)
      }
      //delete every board from Task.jsx
    }

    if(c_seconds) {

      // seconds change
      seconds ? this.setState({seconds: seconds-1}) : this.setState({seconds: 59});

      // minutes change
      if(c_seconds % 60 === 0 && minutes) {
        this.setState({minutes: minutes -1});
      }

      // when only hours entered
      if(!minutes && hours) {
        this.setState({minutes: 59});
      }

      // hours change
      if(c_seconds % 3600 === 0 && hours) {
        this.setState({hours: hours-1});
      }

    } else {
      clearInterval(this.timer);
    } 
  }

  stopTimer = () => {
    clearInterval(this.timer);
  }

  resetTimer = () => {
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0
    });
    this.hoursInput.current.value = 0;
    this.minutesInput.current.value = 0;
    this.secondsInput.current.value = 0;
  }

  render() {
    const { hours, minutes, seconds } = this.state;

    return (
      <div className="SetTimer">
        <h1 className="timer-title"> Timer</h1>

        <label for="hours">Hour: </label>
        <input ref={this.hoursInput} type="number" class ="form-control input-lg" placeholder={"set the hour"}  name="hours" onChange={this.inputHandler} />
        
        <label for="minutes">Min:   </label>
        <input ref={this.minutesInput} type="number" class ="form-control input-lg" placeholder={"set the minutes"}   name="minutes"  onChange={this.inputHandler} />
        
        <label for="seconds">Sec:   </label>
        <input ref={this.secondsInput} type="number" class ="form-control input-lg" placeholder={"set the seconds"}  name="seconds"  onChange={this.inputHandler} />
        
         <div>
            <button onClick={this.startTimer} className="start">start</button>
            <button onClick={this.stopTimer}  className="stop">stop</button>
            <button onClick={this.resetTimer}  className="reset">reset</button>
         </div>
         <h2 className = "timer-settimer"> Timer {hours}: {minutes} : {seconds} </h2>
      </div>

    );
  }
}

export default SetTimer;