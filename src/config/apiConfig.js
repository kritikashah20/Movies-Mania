import axios from "axios";

// time-outs
const timeouts = {
    ONE_MIN: 60000,
    THIRTY_SEC: 30000
}

// server configuration
// const apiVersion = "v0"
const serverBaseURL = "http://www.omdbapi.com"
export const apiKey = "2ca3dbf8"


// axios configuration
const axiosInstance = axios.create({
    baseURL: serverBaseURL,
    headers: {}
})



// methods
export const GET = (url, headers) => {
    return axiosInstance({
        method: "get",
        url: url,
        headers: headers || {},
        timeout: timeouts.THIRTY_SEC
    })
}