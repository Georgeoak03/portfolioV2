import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowDown, faBars, faXmark, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhp, faJs, faHtml5, faCss3Alt, faReact, faBootstrap, faNode, faSass, faGitAlt, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import App from './App';
import reportWebVitals from './reportWebVitals';

library.add(faArrowDown, faBars, faXmark, faPhp, faJs, faHtml5, faCss3Alt, faReact, faBootstrap, faNode, faSass, faGitAlt, faLinkedin, faGithub, faEnvelope)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
