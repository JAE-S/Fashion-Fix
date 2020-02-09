// Import Axios
// =========================================================   
    import axios from "axios"; 

// getPost function -> Request data from the API
// =========================================================   
    export default {
        getPosts: function() {
            return axios({
                    method: 'get',
                    url: 'https://private-cc77e-aff.apiary-mock.com/posts',
                    headers: {'Content-Type': 'text/plain'}, 
                    crossdomain: true
            });
        }
    }