// React Imports 
// =========================================================
  // import React from 'react';
  import React, {lazy, Suspense } from 'react';
// Components
// =========================================================
  import Loading from './Components/Loading'
  import { Footer } from './Components/Footer'
// Stylesheets
// =========================================================
  import './Assets/globalCss/reset.css'
  import './Assets/globalCss/layout.css'
  import './Assets/globalCss/typography.css'
// Pages 
// =========================================================
  const SocialWall = lazy(() => import('./Pages/socialWall'));
// Fallback prop to render while Social Wall is loading 
// =========================================================
  const renderLoader = () => <Loading/>;

  
  const App = () => (
    <>
      <Suspense fallback={renderLoader()}>
        <SocialWall/>
      </Suspense>
      <Footer/>
    </>
  )

  export default App;
 