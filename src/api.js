import axios from "axios";

const vimeoEndpoint = "https://api.vimeo.com"
const vimeoAppId = "6c2b39d9539f19cdfb497d2b470e8e9e";
const apiEndpoint = "http://localhost:3001"
const vimeoOptions = {
    headers: {
        "Content-Type": "application/json" ,
        "Authorization": `Bearer ${vimeoAppId}`,
        "Accept":	"application/vnd.vimeo.*+json;version=3.4"
    }
};

export const getVideo = videoId => axios.get(`${vimeoEndpoint}/videos/${videoId}`, vimeoOptions);
export const getAuthUrl = () => axios.get(`${apiEndpoint}/authUrl`);
export const getToken = code => axios.post(`${apiEndpoint}/tokenization`, { code : code });
