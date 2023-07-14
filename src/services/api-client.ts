import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'945a2efe64054aee9fb528dcfe451933'
    }
})