import { useState } from 'react';
import './App.css';

function App() {
  const [nic, setNic] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  var month;
  var days;
  var day;


  const clickHander = () =>{
    
    let year = parseInt(nic.charAt(0) + nic.charAt(1)) + 1900;
    days = parseInt(nic.charAt(2) + nic.charAt(3) + nic.charAt(4));
    if (days > 500){
      month = Math.floor((days-500)/30) + 1;
      days = days-500;
    }
    else{
      month = Math.floor(days/30) + 1;
    }
    switch(month){
      case 1:
        month = "January";
        day = days;
        break;
      case 2:
        month = "February";
        day = days - 31;
        break;
      case 3:
        month = "March";
        day = days - 60;
        break;
      case 4:
        month = "April";
        day = days - 91;
        break;
      case 5:
        month = "May";
        day = days - 121;
        break;
      case 6:
        month = "June";
        day = days - 152;
        break;
      case 7:
        month = "July";
        day = days - 182;
        break;
      case 8:
        month = "August";
        day = days - 213;
        break;
      case 9:
        month = "September";
        day = days - 244;
        break;
      case 10:
        month = "October";
        day = days - 274;
        break;
      case 11:
        month = "November";
        day = days - 305;
        break;
      case 12:
        month = "December";
        day = days - 335;
        break;
      default:
        month = "Invalid";
    }
    setDob(`${(month > 12) ? "Invalid NIC Number": `You born in ${(day < 10 ? '0' : '')}${day}- ${month}- ${year}`}`);
    setGender(`${(month > 12) ? "": `You are a ${parseInt(nic.charAt(2))>= 5 ? 'Female' : 'Male'}`}`);
  }

  const clearIt = () =>{
    setDob(``);
    setGender(``);
    setNic(``);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="check">
          <h2>NIC Decoder</h2>
          <form>
            <label>NIC: </label>
            <input
            className='data' type="text" required value={nic} onChange={(e) => setNic(e.target.value)}  
            />
            <button type="button" onClick={clickHander}>Check</button>
            <button type="button" onClick={clearIt}>clear</button>
            <p>{((nic.length > 10) ? "invalid format" : nic)}</p>
            <p>{((nic.length > 10) ? "" : dob)}</p>
            <p>{((nic.length > 10) ? "" : gender)}</p>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
