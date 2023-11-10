import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key: '44a06b7b875e4050a9107bceae846629'
    }
})