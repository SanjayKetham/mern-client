import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
//   const[firstName, setFirstName]=useState("");
//   const[lastName, setLastName]=useState("");
//   console.log(firstName);
//   console.log(lastName);
// function changeFirstHandler(event){
//   setFirstName(event.target.value);
// }

// function changeLastHandler(event){
//   setLastName(event.target.value);

// }
function changeHandler(event){
  const {name,value,checked,type} = event.target;
  setFormData(prevFormData =>{
    return{
      ...prevFormData,
      [name]:event.target.value

    }
  });
}

function submitHandler(event){
  event.preventDefault();
  console.log(formData);
}
const [formData, setFormData]=useState({firstName:"",lastName:"",email:"",comments:"", isvisible:true,mode:"", favCar:""});
console.log(formData);
  return (
    <form onSubmit={submitHandler}>
      <input 
      type="text" 
      placeholder="first name"
      onChange={changeHandler}
      name="firstName"
      value={formData.firstName}/>
      <br/>
      <br></br>
     <input 
      type="text" 
      placeholder="last name"
      onChange={changeHandler}
      name="lastName"
      value={formData.lastName}/>
    <br/>
    <br></br>
     <input 
      type="email" 
      placeholder="Email"
      onChange={changeHandler}
      name='email'
      value={formData.email}/>
      <br></br>
      <br></br>

      <textarea
      placeholder='enter your comments here'
      onChange={changeHandler}
      name='comments'
      value={formData.comments}
      id="isvisible"
      checked= {formData.isvisible}
      />
<br/>
<br></br>
      <input
      type='checkbox'
      onChange={changeHandler}
      name='isvisible'
      />
      <label htmlFor='isvisible'>Am I visible ?</label>
      <br/>
      <br></br>

<fieldset>
  <legend>Mode:</legend>
  <input
      type="radio"
      onChange={changeHandler}
      name='mode'
      value='Online-Mode'
      id="Online-Mode"
      checked={formData.mode==="Online-Mode"}
      />
      <label htmlFor='Online-Mode'>Online Mode</label>

      <input
      type="radio"
      onChange={changeHandler}
      name='modex'
      value='Offline-Mode'
      id="Offline-Mode"
      checked={formData.mode==="Offline-Mode"}
      />
      <label htmlFor='Offline-Mode'>Offline Mode</label>
</fieldset>

      <select
        name="favCar"
        id='favCar'
        value={formData.favCar}
        onChange={changeHandler}
      >
        <option value="Scorpio">Scarpio</option>
        <option value="fartuner">fartuner</option>
        <option value="Tharrr">Tharrr</option>
        <option value="Legender">Legender</option>
        <option value="Defender">Defender</option>
      </select>
      <br/>
      <br></br>
      <button type='submit'>Submit</button>
       </form>
  );
}

export default App;
