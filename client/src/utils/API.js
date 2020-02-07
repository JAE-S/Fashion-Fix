import axios from "axios"; 

export default {
    getPosts: function() {
        return axios.get("http://private-cc77e-aff.apiary-mock.com/posts"); 
    }

}