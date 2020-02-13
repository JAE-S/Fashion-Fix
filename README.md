
 <img src="/client/src/Assets/images/image_1.gif" align="center"
     alt="Bullring Birmingham Fashion Fix" width="100%" height="auto">


---

## Table of Contents
  * [Summary](#Summary)
  * [Technologies](#technologies)
  * [Features And Functionality](#features-and-functionality)
  * [File Architecture](#file-architecture)
  * [Click here to visit the site!](https://bullring-fashion-fix.herokuapp.com/)
---

## Summary 
 > This is a promotional application for Bullring Birmingham's Annual Autumn Fashion Fix Event. Usuers are able to view the "social wall" to discover latests trends and releven social media posts from Twitter and Instagram. 
---

## Technologies
> <b>Design Tools:</b>
  * Adobe Illustrator
  * Adobe Photoshop
  
> <b>Development Tools:</b>
  * <b>Framework:</b> Material UI
  * React
  * Express
  * Path 
  * Node 
  * if-env
  * Moment
  * Concurrently
  * Git
  * Heroku (Heroku build)
---

## Features And Functionality


  * <b>Responsive design to accommodate any screen width (mobile, tablet, desktop, etc.) These images were generated by using a mobile emulator.</b>
    <img src="client/src/Assets/images/Readme_files/mobile_images.gif" align="center"
       alt="Mobile Mock-Up Images" width="100%" height="auto">
 
  * <b>Filter post types to display specific information (View All, Manual, Twitter, Instagram)</b>
     <img src="client/src/Assets/images/Readme_files/filter_post_types.gif" align="center"
        alt="Filter Post Types" width="100%" height="auto">
        
  * <b>Open links in a new window</b>
     <img src="client/src/Assets/images/Readme_files/open_in_new_window.gif" align="center"
        alt="Open Links in a New Window" width="100%" height="auto">

  * <b>Load more posts</b>
     <img src="client/src/Assets/images/Readme_files/loadmore.gif" align="center"
        alt="Open Load more" width="100%" height="auto">
        
  * <b>Loading Site: React, { Lazy, Suspense } - displays a CSS loading annimation to provide user feedback while the site loads. This feature was tested by reducing the network speed in the Chrome Browser extension.</b>
     <img src="client/src/Assets/images/Readme_files/loading.gif" align="center"
        alt="Loading Site" width="100%" height="auto">
---

## File Architecture

<details><summary><b>Click To View</b></summary>
 

         Fashion Fix
         ├── Client
         │   ├── build
         │   ├── node_modules
         │   ├── public
         │   ├── src
         │   │   ├── Assets
         |   │   │   ├── globalCss
         |   |   │   │   ├── layout.css
         |   |   │   │   ├── mediaScreens.css  
         |   |   │   │   ├── reset.css  
         |   |   │   │   └── typography.css 
         |   │   │   └── images
         |   |   │   │   ├── image_1.gif  
         |   |   │   │   ├── image_2.gif  
         |   |   │   │   └── image_3.gif
         │   │   ├── Components
         |   │   │   ├── Cards
         |   |   │   │   ├── instagram.js          
         |   |   │   │   ├── manual.js
         |   |   │   │   └── twitter.js
         |   │   │   ├── Carousel
         |   |   │   │   ├── index.js
         |   |   │   │   └── style.css
         |   │   │   ├── Footer
         |   |   │   │   └── index.js
         |   │   │   └── Loading
         |   |   │       └── index.js
         │   │   ├── Pages
         |   │   │   └── socialWall.js
         │   │   ├── utils
         |   │   │   └── API.js
         │   │   ├── App.js
         │   │   ├── App.test.js
         │   │   ├── index.js
         │   │   ├── serviceWorker.js 
         │   │   └── setupTests.js
         │   ├── .gitignore
         │   └── package.json
         ├── node_modules
         ├── routes
         ├── .gitignore
         ├── package.json
         ├── Readme.md 
         └── server.js


</details>

---

[Back To Top](#welcome-to-Fashion-Fix)
