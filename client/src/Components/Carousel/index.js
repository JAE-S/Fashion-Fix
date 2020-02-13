// React Imports 
// =========================================================   
  import React from 'react';
// NPM Imports 
// =========================================================   
  import { Carousel } from "react-responsive-carousel";
// Import Media
// =========================================================   
  import Image_3 from "../../Assets/images/image_3.gif"
  import Image_2 from "../../Assets/images/image_2.gif"
  import Image_1 from "../../Assets/images/image_1.gif"

// Carousel 
// =========================================================   
  export default () => (

      <Carousel 
          autoPlay 
          // infiniteLoop 
          showThumbs={false} 
          showStatus={false}
          swipeable={true}
      > 
        <div>
          <img alt="Style Birmingham" src={Image_1} />
        </div>
        
        <div>
          <img alt="Style Birmingham" src={Image_2} />

        </div>

        <div>
          <img alt="Style Birmingham" src={Image_3} />
        </div>
      </Carousel>
    );