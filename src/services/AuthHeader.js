import { useNavigate } from "react-router-dom";

function AuthHeader() {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    console.log(user);
    console.log(user.jwttoken);
    if(user){
        return {'Authorization': 'Bearer '+user};
        //return {"x-auth-token": user.jwttoken};
    } else {
        navigate("/login");
        return{};
    }
}

export default AuthHeader;