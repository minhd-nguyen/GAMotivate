import React, {useState, useEffect} from 'react';
import userService from '../../services/userService';
import "./UserPage.css";
import {useParams} from 'react-router-dom';

export default function UserPage() {
  const [account, setAccount] = useState({})
  const { id } = useParams();
  useEffect(() =>{
    getAccount()
  }, [])

  const getAccount = async () => {
    const newAccount = await userService.getUserFromId(
      id
    )
    console.log(newAccount)
    setAccount(newAccount)
  }

  return (
      <div className="User">
        <div className="inner-div">
          <div className="background-color-div">
            <img src="img" alt="img"/><br/>
            <button>Edit Profile</button><br/>
            <p><b>{account.name}</b></p><br/>
            <p>{account.job}</p><br/>
            <p><b>{account.cohort}</b></p><br/>
            <p><b>{account.status}</b></p><br/>
            <p>{account.location}</p><br/>
          </div>
          <div className="imgs">
            <img src="https://i.imgur.com/fm34YyM.png" width="18" alt="world"/>              <a href="#portfolio" target="_blank" >Portfolio link</a><br/>
            <img src="https://i.imgur.com/c9Rrzpx.png" alt="linkedin" width="18"/>         <a href="#linkedin" target="_blank">LinkedIn link</a><br/>
            <img src="https://i.imgur.com/LkBsi3O.png" alt="notifcations" width="18"/> Notifications
          </div>  
        </div>     
      </div>
    );
}
