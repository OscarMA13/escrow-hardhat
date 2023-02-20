import axios from 'axios';

const server = axios.create({
    baseUrl: "http://localhost:4000"
})

export default server;