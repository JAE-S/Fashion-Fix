// React Imports 
// =========================================================   
   import React, {Component} from 'react';
// NPM Imports 
// =========================================================   
   import Moment from 'react-moment';
   import Linkify from 'linkifyjs/react';
   import LazyLoad from 'react-lazy-load';
   import hashtag from 'linkifyjs/plugins/hashtag';
   import * as linkify from 'linkifyjs';
// Material UI Components
// =========================================================   
   import Fab from '@material-ui/core/Fab';
   import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// Custom Components
// =========================================================   
   import Carousel from "../Components/Carousel";
   import Manual from "../Components/Cards/manual";
   import Twitter from "../Components/Cards/twitter";
   import Instagram from '../Components/Cards/instagram';
   import AppBar from '../Components/AppBar';
// Styling Imports 
// =========================================================   
   import "../Assets/globalCss/layout.css";
   import "../Assets/globalCss/mediaScreens.css";
   import "react-responsive-carousel/lib/styles/carousel.min.css";
// Import API 
// =========================================================
    import API from "../utils/API"
import mention from 'linkifyjs/lib/linkify/plugins/mention';
    hashtag(linkify);
    mention(linkify);
// Social Wall
// =========================================================
    class SocialWall extends Component {

        constructor(props) {
            super(props);
            this.state = {
                data: [],
                showManual: true, 
                showTwitter: true,
                showInstagram: true,
            };
            this.handleClick = this.handleClick.bind(this);
        }; 
        
        componentDidMount() {
            this.renderAllPosts()
        }

        // Handle API response data
        // =========================================================
        renderAllPosts = () => {
            API.getPosts()
            .then(res => {
                let results = res.data.items
                // console.log(res.data.items)

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

        // Click function to handle service_name filtering 
        // =========================================================
        handleClick = (evt) => {
            const id = evt.target.getAttribute("id");
            // console.log(id)
            if (id === "manual"){
                return this.setState({ showTwitter: false, showManual: true, showInstagram: false })
            } else if (id === "twitter"){
                return this.setState({ showTwitter: true, showManual: false, showInstagram: false })
            } else if (id === "instagram"){
                return this.setState({ showTwitter: false, showManual: false, showInstagram: true})
            } else if (id === "viewAll"){
                return this.setState({ showTwitter: true, showManual: true, showInstagram: true})
            }
        } 

        
        // Load More data
        // =========================================================
        loadMore = () => {
            let loadData = this.state.data 
            let newArray = loadData.concat(loadData)

           this.setState({
                data: newArray,
            })
        }

        render() {
            const linkifyOptions = 
                {
                    formatHref: function (href, type) {
                    if (type === 'hashtag') {
                        href = 'https://twitter.com/hashtag/' + href.substring(1);
                    } else if (type === 'mention') {
                        href = 'https://twitter.com/hashtag/' + href.substring(1);
                    }
                    return href;
                    }, 
                    
                }

            return (
                <>
                
                    <Carousel/>
                    <AppBar
                        viewAll={<div id="viewAll" onClick={this.handleClick}>View All</div>}
                        manual={<div id="manual" onClick={this.handleClick}>Manual</div>}
                        twitter={<div id="twitter" onClick={this.handleClick}>Twitter</div>}
                        instagram={<div id="instagram" onClick={this.handleClick}>Instagram</div>}
                    />    
                        <div className="post-wrapper">
                            <div className="post">
                                {this.state.data.map((item, i) => (
                                    <LazyLoad 
                                        key={i} 
                                        placeholder={`Loading...`}
                                        onContentVisible={() => console.log('look ma I have been lazyloaded!')}
                                    >
                                    <div className="post-item" key={i}>
                                    {/* Manual Posts */}
                                        {item.service_name === "Manual" ? 
                                            <div className={this.state.showManual ? "show" : "hide"}>
                                                <Manual 
                                                    className="post-content"
                                                    title={item.item_name}
                                                    date={<Moment fromNow date={item.item_published}/>}
                                                    image={"https://mir-s3-cdn-cf.behance.net/project_modules/fs/1833e98872085.560c4d907c29c.jpg"}
                                                    altText={item.service_name}
                                                    text={item.item_data.text}
                                                    link={<a href={item.item_data.link}>{item.item_data.link_text}</a>}
                                                />
                                            </div>
                                            :  ( <div style={{display: "none"}}/> )
                                        }
                                    {/* Twitter Posts */}
                                        {item.service_name === "Twitter" ? 
                                            <div className={this.state.showTwitter ? "show" : "hide"}>
                                                <Twitter
                                                    className="post-content twitter"
                                                    title={item.item_data.user.username}
                                                    date={<Moment fromNow date={item.item_published}/>}
                                                    tweet={<Linkify  options={linkifyOptions} tagName="p">{item.item_data.tweet}</Linkify>}
                                                />
                                            </div>
                                            :  ( <div style={{display: "none"}}/> )
                                        }
                                    {/* Instagram Posts */}
                                        {item.service_name === "Instagram" ? 
                                            <div className={this.state.showInstagram ? "show" : "hide"}>
                                                <Instagram
                                                    className="post-content instagram"
                                                    title={item.item_data.user.username}
                                                    date={<Moment fromNow date={item.item_published}/>}
                                                    image={"https://www.mixedgems.co.uk/resize/310x310/90/2014/09/Screen-Shot-2014-09-28-at-13.23.21.png"}
                                                    altText={item.service_name}
                                                    text={<Linkify  options={linkifyOptions} tagName="p">{item.item_data.caption}</Linkify>}
                                                    link={<a href={item.item_data.link} target="_blank" rel="noopener noreferrer">View on Instagram</a>}
                                                />
                                            </div>
                                            :  ( <div style={{display: "none"}}/> )
                                        }
                                    </div>
                                    </LazyLoad>
                                ))}
                            </div>
                        </div>
                        <div style={{display: "table", margin: "0 auto"}}>
                            <Fab variant="extended" style={{marginBottom: "40px"}} onClick={this.loadMore}>
                                <ExpandMoreIcon  />
                                Show More 
                            </Fab>
                        </div>
                </>
            )
        }
    }

    export default SocialWall;