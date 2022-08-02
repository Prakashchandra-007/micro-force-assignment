import React,{useState} from 'react'

function Clock() {
  const [currentTime,setCurrentTime] = useState();
  function getCurrentTime() {
    const d = new Date();
    setCurrentTime(d.toLocaleTimeString());
  }
  setInterval(getCurrentTime,1000);
  return (
    <div>{currentTime}</div>
  )
}

export default Clock;