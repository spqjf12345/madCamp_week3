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
    // 인풋에 적은 숫자 지우기
    const hoursInput = document.querySelector("input[name=hours]");
    const minutesInput = document.querySelector("input[name=minutes]");
    const secondsInput = document.querySelector("input[name=seconds]");
    hoursInput.value="";
    minutesInput.value="";
    secondsInput.value="";
  }

  countDown = () => {
    const  { hours, minutes, seconds } = this.state;
    const LS_KEY_KILL_PLANT = "kill_plant";

    let killCount;
    const currentKillCount = JSON.parse(localStorage.getItem(LS_KEY_KILL_PLANT))
    killCount = currentKillCount? currentKillCount : 0;
    
    let c_seconds = this.convertToSeconds(hours, minutes, seconds);
    if (!this.props.toDoIsNotEmpty && !this.props.InProgressIsNotEmpty){ // 우선 할일을 다 하게 되면
      this.stopTimer();
    } else { // 할일 다 안 한 경우면
      if ( hours === 0 &&  minutes === 0 & seconds === 0) { // time over라면
        killCount += 1;
        alert(`시간 내에 할일을 다 못하셨군요... 꽃이 시들었어요. ㅠㅠ`)
      }
      localStorage.setItem(LS_KEY_KILL_PLANT, JSON.stringify(killCount));
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
    const hoursInput = document.querySelector("input[name=hours]");
    const minutesInput = document.querySelector("input[name=minutes]");
    const secondsInput = document.querySelector("input[name=seconds]");
    hoursInput.value="";
    minutesInput.value="";
    secondsInput.value="";
  }

  resetTimer = () => {
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0
    });
    this.hoursInput.current.value = "";
    this.minutesInput.current.value = "";
    this.secondsInput.current.value = "";
  }

  render() {
    const { hours, minutes, seconds } = this.state;

    return (
      <div className="SetTimer">
        <h3>타이머</h3>
        <div>
          <input ref={this.hoursInput} type="number" className="form-control input-lg" placeholder={"시를 입력하세요"} name="hours" onChange={this.inputHandler} />
          <input ref={this.minutesInput} type="number" className="form-control input-lg" placeholder={"분을 입력하세요"} name="minutes" onChange={this.inputHandler} />
          <input ref={this.secondsInput} type="number" className="form-control input-lg" placeholder={"초를 입력하세요"} name="seconds" onChange={this.inputHandler} />
        </div>
         <div>
            <button onClick={this.startTimer} className="startBtn">START</button>
            <button onClick={this.stopTimer}  className="stopBtn">STOP</button>
            <button onClick={this.resetTimer}  className="resetBtn">RESET</button>
         </div>

         <h4>남은 시간</h4>
         <h2>{hours<10? `0${hours}` : hours} : {minutes<10? `0${minutes}` : minutes} : {seconds<10? `0${seconds}` : seconds}</h2>
      </div>
    );
  }
}

export default SetTimer;