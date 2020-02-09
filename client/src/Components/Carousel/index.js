// React Imports 
// =========================================================   
  import React from 'react';
// NPM Imports 
// =========================================================   
  import { Carousel } from "react-responsive-carousel";
// CSS Imports 
// =========================================================   
  import "./style.css";

// Carousel 
// =========================================================   
  export default () => (
    // TODO:////////////////// -> Card Actions 
      // 1. Fix background images 
      // 2. Fix background image re-size 
      // 3. Legend - class 
      <Carousel 
          autoPlay 
          // infiniteLoop 
          showThumbs={false} 
          showStatus={false}
      > 
        <div>
          <img alt="hi" style={{width: "25%", paddingTop: "20px"}} src="https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/cc/d1/0b/ccd10b39-7c45-5122-b56c-86a7bce23dc2/BullringAppIcon-0-1x_U007emarketing-0-0-85-220-0-4.png/246x0w.jpg" />
          {/* <p className="legend"></p> */}
        </div>
        <div>
          <img alt="hi" style={{width: "20%", paddingTop: "20px"}} src="https://1.bp.blogspot.com/-J0MSoeCUY-M/VLGcwDwil9I/AAAAAAAABWE/S9x0jgxcGLI/s1600/fashion%2Bfix%2B3.PNG" />
          {/* <p className="legend"></p> */}
        </div>
        <div>
          <img alt="hi" src="https://image.s5a.com/is/image/saks/designer-vol1-082019-hero?scl=1&qlt=75" />
          {/* <p className="legend"></p> */}
        </div>
      </Carousel>
    );