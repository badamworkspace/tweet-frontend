import { Avatar, Button } from '@material-ui/core'
import  PublishIcon  from '@material-ui/icons/Publish'
import  VerifiedUserIcon  from '@material-ui/icons/VerifiedUser'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import React, {forwardRef, useState} from 'react'
import './Post.css'
import Reply from './Reply'
import TweetService from '../services/TweetService';

const  Post = forwardRef(
    (props, ref) => {
    const [like,setLike] = useState(false);

    const toggle = (tweetId) => {
        // e.preventDefault();
        let localLiked = like;
      
        // Toggle the state variable liked
        localLiked = !localLiked;
        setLike(localLiked);
        if(localLiked === true){
            TweetService.likeTweet(tweetId);
        }else{
            TweetService.unlikeTweet(tweetId);
        }
      };

    return (
        <div className = "post" ref={ref}>
            <div className = "post__avatar">
                <Avatar 
                    src = {props.avatar}
                />
            </div>
            <div className = "post__body">
                <div className = "post__header">
                    <div className = "post__headerText">
                    <h3>
                        {props.username}
                            <span className = "post__headerSpecial">
                                <VerifiedUserIcon className = "post__badge" />
                                @{props.createdDateTime}
                            </span>
                    </h3>
                    </div>
                    <div className = "post__headerDescription">
                        <p>{props.message}</p>
                    </div>
                </div>
                <img 
                    src = {props.image}
                    alt = ""
                />
                <div className = "post__footer">
                    <Reply
                    tweetId={props.tweetId}
                    stateChange={props.stateChange}
                    reply={props.reply}
                    />
                    <Button onClick={e => toggle(props.tweetId)} >
                        {like === false ? (
                        <FavoriteBorderIcon />
                        ) : (
                        <FavoriteSharpIcon />
                        )}
                        {props.likes} 
                    </Button>
                    <PublishIcon  fontSize = "small" /> 
                </div>
            </div>    
        </div>
    )
})

export default Post
