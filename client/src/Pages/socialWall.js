// React Imports 
// =========================================================   
   import React, {Component} from 'react';
// Import API 
// =========================================================
    import API from "../utils/API"


    class SocialWall extends Component {


        constructor(props) {
            super(props);
            this.state = {
            data: []
        };
    }; 
        
        componentDidMount() {
            this.renderAllPosts()
        }

        renderAllPosts = () => {
            API.getPosts()
            .then(res => {
            let results = res.data.items
                console.log(res.data.items)

                const itemsArray = results.map((obj) => {
                    const { service_name } = obj; 
                    console.log(service_name)
                return {
                    service_name
            };
            })
            this.setState({
            data: itemsArray
        })
        })
        }
        render() {

            return (
            <>
                { this.state.data.map((item, i) => (
                    <h1 key={i}>{item.service_name}</h1>
                ))}
            </>
            )
        }
    }

    export default SocialWall;