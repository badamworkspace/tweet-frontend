import axios from "axios";

const API_URL = "http://localhost:8080/api/v1.0/users";

const signup = async ( loginId, firstName, lastName, email, password, contactNumber) => {
    const response = await axios.post(API_URL + "/register", {
        "loginId": loginId,
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "password": password,
        "contactNumber": contactNumber,
    });
    if (response.status === 200) {
        return response.data;
    }
};

const login = async (username, password) => {
    const response = await axios.post(API_URL + "/login", {
        "username": username,
        "password": password,
    });
    if (response.data.jwttoken) {
        sessionStorage.setItem("user", JSON.stringify(response.data.jwttoken));
        sessionStorage.setItem("userId", username);
    }
    return response.data;
};

const forgot = async (email, password) => {
    const response = await axios.post(API_URL + "/" + email + "/forgot", {
        "username": email,
        "password": password,
    });
    return response.data;
};

const logout = () => {
    sessionStorage.clear();
    
}

const getCurrentUser = () => {
    return JSON.parse(sessionStorage.getItem("user"));
}

const AuthService = {
    signup,
    login,
    forgot,
    logout,
    getCurrentUser,
}

export default AuthService;