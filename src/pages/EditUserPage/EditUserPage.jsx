import React, { useState } from "react"
import userService from "../../services/userService"
import { useParams, Link } from "react-router-dom"
import ProfileImg from "../../Assets/Profile Image.png"
import "./EditUserPage.css"

export default function EditUserPage({ user, setUser, history }) {
    const { id } = useParams()
    const [formData, setFormData] = useState({
        _id: user._id,
        name: user.name,
        email: user.email,
        location: user.location || "",
        linkedin: user.linkedin.includes("https://")
            ? user.linkedin
            : "https://",
        portfolio: user.portfolio.includes("https://")
            ? user.portfolio
            : "https://",
        cohort: user.cohort || "",
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleEditUserSubmit = async (e) => {
        e.preventDefault()
        const updatedUser = await userService.updateUser(formData)
        setUser(updatedUser)
        history.push(`/user/${id}`)
    }

    return (
        <div className="outer-div">
            <div className="edit-user">
                <center>
                    <summary>Edit Profile</summary>
                </center>
                <center>
                    <img src={ProfileImg} className="profile-img" alt="img" />
                </center>
                <form onSubmit={handleEditUserSubmit}>
                    <label htmlFor="name">Name</label>
                    <br />
                    <input
                        name="name"
                        onChange={handleChange}
                        value={formData.name}
                    />
                    <br />
                    <label htmlFor="speciality">Cohort</label>
                    <br />
                    <select
                        style={{ display: "block" }}
                        onChange={handleChange}
                        name="cohort"
                        value={formData.cohort}
                    >
                        <option value="Software Engineer">
                            Software Engineer
                        </option>
                        <option value="UX Designer">UX Designer</option>
                        <option value="Data Scientist">Data Scientist</option>
                    </select>
                    <br />
                    <label htmlFor="location">Location</label>
                    <br />
                    <input
                        type="text"
                        onChange={handleChange}
                        name="location"
                        value={formData.location}
                    />
                    <br />
                    <label htmlFor="linkedin">LinkedIn</label>
                    <br />
                    <input
                        onChange={handleChange}
                        name="linkedin"
                        value={formData.linkedin}
                    />
                    <br />
                    <label htmlFor="portfolio">Portfolio</label>
                    <br />
                    <input
                        onChange={handleChange}
                        name="portfolio"
                        value={formData.portfolio}
                    />
                    <br />
                    <center>
                        <button className="edit-button">Save</button>
                    </center>
                </form>
            </div>
        </div>
    )
}