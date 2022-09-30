import React, { useEffect, useState } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import FlipMove from 'react-flip-move'
import TweetService from '../services/TweetService'

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        TweetService.getAllTweets().then(
            (response) => {
                console.log(response.data)
                setPosts(response.data);
            },
            (error) => {
                console.log(error);
            }
        );
    },[]);

    return (
        
        <div className = "feed">
            <div className = "feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />
        
            <FlipMove>
                {posts?.map(post => (
                <Post 
                key = {post.tweetId}
                tweetId = {post.tweetId}
                username = {post.username}
                createdDateTime = {post.createdDateTime}
                message = {post.message}
                likes = {post.likes}
                reply = {post.replyMessage}
                avatar = {post.avatar}
            />
            ))}
            </FlipMove>   
        </div>
    )
}
export default Feed
