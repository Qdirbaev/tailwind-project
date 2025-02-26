import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Feature from './App.jsx'
import Accordion from './components/accordion'
import About from './components/about'
import Post from './components/post'


console.log(document.getElementById('feature-items'))
createRoot(document.getElementById('feature-items')).render(
  <StrictMode>
    <Feature bgc={"#FAEA73"} src="/images/feature-1.svg" alt="fast" title="Fast. Really fast." text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
    <Feature bgc={"#CCEFF6"} src="/images/feature-2.svg" alt="money" title="More bang for buck." text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
    <Feature bgc={"#F7CEDC"} src="/images/feature-3.svg" alt="safety" title="Safe and secure." text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
  </StrictMode>,
)
createRoot(document.getElementById('dropdown')).render(
  <StrictMode>
    <Accordion />
  </StrictMode>
)
createRoot(document.getElementById('about-items')).render(
  <StrictMode>
    <About />
  </StrictMode>
)
createRoot(document.getElementById('posts')).render(
  <StrictMode>
    <Post />
  </StrictMode>
)

