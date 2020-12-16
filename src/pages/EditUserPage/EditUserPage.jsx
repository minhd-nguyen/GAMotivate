import React, { useState, useEffect } from "react"
import userService from "../../services/userService"
import { useParams, Link } from "react-router-dom"
import ProfileImg from "../../Assets/Profile Image.png"
import "./EditUserPage.css"

export default function EditUserPage({ user }) {
    const { id } = useParams()
    const [updatedUser, setUpdatedUser] = useState()

    useEffect(() => {
        getAccount()
    }, [])

    const getAccount = async () => {
        const userAccount = await userService.getUserFromId(id)
        console.log(userAccount)
        setUpdatedUser(userAccount)
    }

    const handleEditUserSubmit = async (newUserData) => {
        await userService.updateUser(newUserData)
    }

    return (
        <div className="edit-user">
            <summary>Edit Profile</summary>
            <img src={ProfileImg} className="profile-img" alt="img" />
            <form onSubmit={() => handleEditUserSubmit(updatedUser)}>
                <label htmlFor="name">Name</label>
                <br />
                <input type="text" id="name" />
                <br />
                <label htmlFor="speciality">Speciality</label>
                <br />
                <select style={{ display: "block" }}>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="UX Designer">UX Designer</option>
                    <option value="Data Scientist">Data Scientist</option>
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
                <input type="submit" value="Save" className="edit-button" />
            </form>
        </div>
    )
}
