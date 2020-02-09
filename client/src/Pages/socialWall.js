// React Imports 
// =========================================================   
   import React, {Component} from 'react';
// NPM Imports 
// =========================================================   
   import Moment from 'react-moment';
   import Linkify from 'linkifyjs/react';
// Custom Components
// =========================================================   
   import Carousel from "../Components/Carousel";
   import Manual from "../Components/Cards/manual";
   import Twitter from "../Components/Cards/twitter";
   import Instagram from '../Components/Cards/instagram';
// Styling Imports 
// =========================================================   
   import "../Assets/globalCss/layout.css"
   import "../Assets/globalCss/mediaScreens.css"
   import "react-responsive-carousel/lib/styles/carousel.min.css";
// Import API 
// =========================================================
    import API from "../utils/API"

// Social Wall
// =========================================================
    class SocialWall extends Component {

        constructor(props) {
            super(props);
            this.state = {
                data: [],
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
                    const { service_name, 
                            item_data, 
                            item_published, 
                            item_name,

                    } = obj; 
                    const image_url = item_data.image_url ? item_data.image_url : 'unavailable';
                    console.log(service_name)
                    
                    return {
                        service_name, 
                        item_data, 
                        item_published,
                        image_url,
                        item_name
                    };
                })

                this.setState({
                    data: itemsArray,
                })
            })
        }

        render() {

            return (
                <>
                    <Carousel/>
                        <div className="post-wrapper">
                            <div className="post">
                                {this.state.data.map((item, i) => (

                                    <div className="post-item" key={i}>
                                    {/* Manual Posts */}
                                        {item.service_name === "Manual" ? 
                                            <Manual 
                                                className="post-content"
                                                title={item.item_name}
                                                date={<Moment format="D MMM YYYY" date={item.item_published}/>}
                                                image={"https://mir-s3-cdn-cf.behance.net/project_modules/fs/1833e98872085.560c4d907c29c.jpg"}
                                                altText={item.service_name}
                                                text={item.item_data.text}
                                                link={<a href={item.item_data.link}>{item.item_data.link_text}</a>}
                                            />
                                            :  ( <div style={{display: "none"}}/> )
                                        }
                                    {/* Twitter Posts */}
                                        {item.service_name === "Twitter" ? 
                                            <Twitter
                                                className="post-content"
                                                title={item.item_data.user.username}
                                                date={<Moment format="D MMM YYYY" date={item.item_published}/>}
                                                tweet={<Linkify tagName="p">{item.item_data.tweet}</Linkify>}
                                            /> 
                                            :  ( <div style={{display: "none"}}/> )
                                        }
                                    {/* Instagram Posts */}
                                        {item.service_name === "Instagram" ? 
                                            <Instagram
                                                className="post-content"
                                                title={item.item_data.user.username}
                                                date={<Moment format="D MMM YYYY" date={item.item_published}/>}
                                                image={"https://www.mixedgems.co.uk/resize/310x310/90/2014/09/Screen-Shot-2014-09-28-at-13.23.21.png"}
                                                altText={item.service_name}
                                                text={item.item_data.caption}
                                                link={<a href={item.item_data.link}>View on Instagram</a>}
                                            />
                                            :  ( <div style={{display: "none"}}/> )
                                        }
                                    </div>

                                ))}
                            </div>
                        </div>
                </>
            )
        }
    }

    export default SocialWall;