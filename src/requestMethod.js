import axios from "axios";

const BASE_URL ="http://localhost:4000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjllYWRiYWVkMzE3YTc4ZGVmNjRlNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzU3OTUzNiwiZXhwIjoxNjYzODM4NzM2fQ.MdEPPuB9HZelPSvtioE8ZVoD0NKqfmEJtTVtuWvWQLQ"


export const publicRequest = axios.create({
    baseURL:BASE_URL
}
);
export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
}
);

