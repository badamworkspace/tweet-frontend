import { Avatar, Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton } from "@material-ui/core";
import ChatBubbleOutline from "@material-ui/icons/ChatBubbleOutline";
import ClearSharp from "@material-ui/icons/ClearSharp";
import { useEffect, useState } from "react";
import Post from "./Post";
import FlipMove from 'react-flip-move'
import TweetService from "../services/TweetService";
import "./TweetBox.css"

export default function Reply(props) {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(props.reply);
  }, [props]);

  const handleClickOpen = () => {
    setOpen(true);
    console.log(posts)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const reply = async (e) => {
    e.preventDefault();
    try {
      await TweetService.replyTweet(props.tweetId, comment).then(
        () => {
        handleClose();
        setComment("")
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
};

  return (
    <Box>
      <Button onClick={handleClickOpen}>
        <ChatBubbleOutline fontSize="small" />{posts?.length}
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth={true}>
        <DialogTitle>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <span>Reply</span>
            <IconButton onClick={handleClose}>
              <ClearSharp />
            </IconButton>
          </Box>
        </DialogTitle>

        <DialogContent>
            <div className = "tweetBox">
                    <form>
                        <div className = "tweetBox__input">
                            <Avatar
                                src = "https://pbs.twimg.com/profile_images/1266938830608875520/f-eajIjB_400x400.jpg"
                            />
                            <input 
                                onChange = {(e) => setComment(e.target.value)}
                                value = {comment} 
                                placeholder = "Write your comment" 
                                type = "text" 
                            />
                        </div>
                        <Button 
                        onClick = { reply }
                        className = "tweetBox__tweetButton">Comment</Button>
                    </form>
                    <DialogContentText>
                    {   
                    <FlipMove>
                        {posts?.forEach(post => (
                        <Post 
                        key = {post.createdDateTime}
                        username = {post.username}
                        createdDateTime = {post.createdDateTime}
                        message = {post.message}
                    />
                    ))}
                    </FlipMove> }
                    </DialogContentText>
            </div>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
