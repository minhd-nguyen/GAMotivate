import React, {useState} from 'react';
import './PostForm.css';
import * as postsAPI from '../../services/posts-api'

export default function PostForm({user}) {
    const [message, setMessage] = useState({message: '',  postedBy: '', cohort: ''})

    const handleChange = (e) => {
        console.log(e.target.name)
        setMessage({
            [e.target.name]: e.target.value,
            postedBy: user.name,
            cohort: user.cohort
        })
    }


    const handleMessageSubmit = async (e) => {
        e.preventDefault();
        try {
           await postsAPI.create(message)

        } catch(err) {
            console.log(err);
        }
    }


    return (

            <form onSubmit={handleMessageSubmit} className="post-form">
                <div className="main-post">
                    <input onChange={handleChange} className="post-input" type="text" placeholder="What's up?" name="message" value={message.message}></input>
                    <button className="post-btn" type="submit">Post</button>
                </div>
            </form>
    )
}
