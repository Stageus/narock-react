import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from "axios";
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from "recoil";

axios.defaults.baseURL = "https://www.narock.site";
// axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(

  <BrowserRouter>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>

);