import React, { useEffect, useState } from 'react'
import './Clock.css'
import Logo from '../Assets/Bhaskar.png'

const Clock = () => {

  const [time, setTime] = useState(new Date());
  console.log(time.getHours() *30);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (

    <div className="clock">
      <div className="dot"></div>
      <div className='hour twelve'>XII</div>
      <div className='hour one'>I</div>
      <div className='hour two'>II</div>
      <div className='hour three'>III</div>
      <div className='hour four'>IV</div>
      <div className='hour five'>V</div>
      <div className='hour six'>VI</div>
      <div className='hour seven'>VII</div>
      <div className='hour eight'>VIII</div>
      <div className='hour nine'>IX</div>
      <div className='hour ten'>X</div>
      <div className='hour eleven'>XI</div>
      <div className="hand hour-hand" style={{ transform: `rotate(${time.getHours() * 30 + time.getMinutes() / 2}deg)` }}></div>
      <div className="hand minute-hand" style={{ transform: `rotate(${time.getMinutes() * 6}deg)` }}></div>
      <div className="hand second-hand" style={{ transform: `rotate(${time.getSeconds() * 6}deg)` }}></div>
      <div>
        <div className="date">
          {time.toLocaleString('default', { month: 'long' })} {time.getDate()}, {time.getFullYear()}
        </div>
        <img src={Logo} alt="Logo" className='logo' />
      </div>
    </div>

  )
}

export default Clock