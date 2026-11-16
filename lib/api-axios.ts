import axios from "axios";

const api = axios.create({
    baseURL:process.env.Next_Url || " ",
    headers:{
        "COntent-Type":"application/json",
    },
    withCredentials:true
})

export default api; 