import { Suspense, useEffect } from 'react'
import Router from './Router/Router'
import './index.css'
import Header from './components/header/Header'
import MainContainer from './components/mainContainer/MainContainer'
import AOS from 'aos';

function App() {
  
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='App'>
      {/* <Header /> */}

      <Suspense fallback={
        <div className="spinner-border" role="status">
          <span className="sr-only d-none">Loading...</span>
        </div>
      }>
        {/* <MainContainer /> */}
        <Router />
      </Suspense>
    </div>
  )
}

export default App
