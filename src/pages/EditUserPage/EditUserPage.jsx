import React, { useState, useEffect } from 'react';
import userService from '../../services/userService';
import { useParams, Link } from 'react-router-dom';
import "./EditUserPage.css";
import ProfileImg from '../../Assets/Profile Image.png';
export default function EditUserPage() {
    const [account, setAccount] = useState({})
    const { id } = useParams();
    useEffect(() => {
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
        <div className="outer-div">
            <div className="edit-user">
                <center><summary>Edit Profile</summary></center>
                <center><img src={ProfileImg} className="profile-img" alt="img" /></center>
                <form id={account._id}>
                    <label htmlFor="name">Name</label>
                    <br />
                    <input type="text" id="name" />
                    <br />
                    <label htmlFor="speciality">Speciality</label>
                    <br />
                    <select style={{ display: "block" }}>
                        <option>Software Engineer</option>
                        <option>UX Designer</option>
                        <option>Data Scientist</option>
                    </select>
                    <br />
                    <label htmlFor="location">Location</label>
                    <br />
                    <input type="text" id="location" />
                    <br />
                    <label htmlFor="linkedin">LinkedIn</label>
                    <br />
                    <input type="text" id="linkedin" />
                    <br />
                    <label htmlFor="portfolio">Portfolio</label>
                    <br />
                    <input type="text" id="portfolio" />
                    <br />
                    <center><button type="button" value="Save" className="update-button"/></center>
                </form>
            </div>
        </div>
    )
}