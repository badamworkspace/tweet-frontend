import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import './TweetBox.css'
import TweetService from '../services/TweetService';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");

    const sendTweet = e => {
        e.preventDefault();
        TweetService.addTweet(tweetMessage);
        setTweetMessage("")
    }

    return (
        <div className = "tweetBox">
            <form>
                <div className = "tweetBox__input">
                    <Avatar
                        src = "https://pbs.twimg.com/profile_images/1266938830608875520/f-eajIjB_400x400.jpg"
                    />
                    <input 
                        onChange = {(e) => setTweetMessage(e.target.value)}
                        value = {tweetMessage} 
                        placeholder = "What's happening" 
                        type = "text" 
                    />
                </div>
                <Button 
                onClick = { sendTweet }
                className = "tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
