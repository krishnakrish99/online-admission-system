import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function CreateUserLogin(){
    let history = useHistory();
  const [adminName, setAdminName] = useState('');
  const [adminContact, setAdminContact] = useState('');
  const [password, setPassword] = useState('');

  const sendDataToAPI = () => {
    axios.post("http://localhost:8082/createMember", {
      adminName,
      adminContact,
      password
    }).then(() => {
      history.push('/read')
    })
  }
    return(
        <div>
            <form>
        <div>
          <label>Student Name</label>
          <input name="collegeName" 
          onChange={(e) => setAdminName(e.target.value)} 
          placeholder='student Name' />
        </div>
        <div>
          <label>Contact number</label>
          <input 
          name="collegeUrl" 
          placeholder='mobile number' 
          onChange={(e) => setAdminContact(e.target.value)} 
          />
        </div>
        <div>
          <label>Password</label>
          <input 
          name="collegeUrl" 
          placeholder='password' 
          onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type='submit' onClick={sendDataToAPI}>Submit</button>
      </form>
        </div>
    );

}