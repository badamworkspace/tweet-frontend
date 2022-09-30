import axios from "axios";
import { useNavigate } from "react-router";
import AuthService from "./AuthService";

const API_URL = "http://localhost:8080/api/v1.0/tweets/";
const userId = sessionStorage.getItem("userId");
const user = JSON.parse(sessionStorage.getItem("user"));

const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + user
  }

function Nav(to) {
    AuthService.logout();
    // sessionStorage.clear();
    const Navigate = useNavigate();
    Navigate(to);
}

const getAllTweetsOfUser = async () =>{
    return await axios.get(API_URL + userId, { headers: headers })
    .then(response => {
        if(response.status === 401){
            Nav('/home')
        }
    });
}

const getAllTweets = async () =>{

    const response = await axios.get(API_URL + "all", { headers: headers })
    if(response.status === 401){
        Nav('/home')
    }
    return response;
}

const addTweet = async (message) =>{
 
    const response = await axios.post(API_URL + userId + "/add", {
        "message": message,
    },  {headers : headers})
    .then(response => {
        if(response.status === 401){
            Nav('/home')
        }
     });
     console.log(response);
  
}

const updateTweet = async (tweetId, message) =>{
  
    axios.put(API_URL + userId + "/update/" + tweetId, {headers: headers}, {
        "message": message,
    })
    .then(response => {
        if(response.status === 401){
            Nav('/home')
        }
     });

}

const deleteTweet = async (tweetId) =>{

    const response = await axios.delete(API_URL + userId + "/delete/" + tweetId, { headers: headers });
    if (response.status === 401) {
        Nav('/home')
    }
}

const likeTweet = async (tweetId) =>{
   
    const response = await axios.put(API_URL + userId + "/like/" + tweetId, {} , { headers: headers });
    if (response.status === 401) {
        Nav('/home')
    }
}

const unlikeTweet = async (tweetId) =>{
   
    const response = await axios.put(API_URL + userId + "/unlike/" + tweetId, {} ,{ headers: headers });
    if (response.status === 401) {
        Nav('/home')
    }
}

const replyTweet = async (tweetId, message) =>{
   axios.post(API_URL + userId + "/reply/" + tweetId, {
        "message": message,
    }, {headers: headers}).then(response => {
        if(response.status === 401){
            Nav('/home')
        }
     });
}

const TweetService = {
    getAllTweetsOfUser,
    getAllTweets,
    addTweet,
    updateTweet,
    deleteTweet,
    replyTweet,
    likeTweet,
    unlikeTweet
}

export default TweetService;