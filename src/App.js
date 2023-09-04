import React from 'react';
import { Routes, Route } from "react-router-dom"

import UserManagement from "./pages/UserManagement"
import BandRequest from "./pages/BandRequest"
import AllBand from "./pages/AllBand";
import AllBandBoard from "./pages/AllBandBoard";
import AllPost from "./pages/AllPost";
import BandPost from "./pages/BandPost";
import BandPostSearch from "./pages/BandPostSearch";
import Community from "./pages/Community";
import Edit from "./pages/Edit"
import FindAccount from "./pages/FindAccount";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Mypage from "./pages/MyPage";
import News from "./pages/News";
import Notice from "./pages/Notice";
import ResetPassword from "./pages/ResetPassword";
import Search from "./pages/Search"
import TotalSearch from "./pages/TotalSearch"
import Write from "./pages/Write"


const App = () => {
  return(
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/admin/usermanagement" element={<UserManagement />}/>
        <Route path="/admin/BandRequest" element={<BandRequest />}/>
        {/* <Route path="/admin" element={<Admin />}/> */}
        <Route path="/allband" element={<AllBand />}/>
        {/* <Route path="/allband/:bandname" element={<AllBandBoard />}/> */}
        <Route path="/allband/:bandname/notice" element={<AllBandBoard />}/>
        <Route path="/allband/:bandname/concertInfo" element={<AllBandBoard />}/>
        <Route path="/allband/:bandname/gallery" element={<AllBandBoard />}/>
        <Route path="/allband/:bandname/community" element={<AllBandBoard />}/>
        <Route path="/allband/:bandname/notice/:postid" element={<BandPost />}/>
        <Route path="/allband/:bandname/concertInfo/:postid" element={<BandPost />}/>
        <Route path="/allband/:bandname/gallery/:postid" element={<BandPost />}/>
        <Route path="/allband/:bandname/community/:postid" element={<BandPost />}/>
        <Route path="/allband/:bandname/notice/search?:keyword" element={<BandPostSearch />}/>
        <Route path="/allband/:bandname/concertInfo/search?:keyword" element={<BandPostSearch />}/>
        <Route path="/allband/:bandname/gallery/search?:keyword" element={<BandPostSearch />}/>
        <Route path="/allband/:bandname/community/search?:keyword" element={<BandPostSearch />}/>
        <Route path="/community" element={<Community />}/>
        <Route path="/news" element={<News />}/>
        <Route path="/notice" element={<Notice />}/>
        <Route path="/community/:postnumber" element={<AllPost />}/>
        <Route path="/news/:postnumber" element={<AllPost />}/>
        <Route path="/notice/:postnumber" element={<AllPost />}/>
        <Route path="/edit" element={<Edit />}/>
        <Route path="/join" element={<Join />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/mypage" element={<Mypage />}/>
        <Route path="/findaccount" element={<FindAccount />}/>
        <Route path="/resetpassword" element={<ResetPassword />}/>
        <Route path="/totalsearch" element={<TotalSearch />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/write" element={<Write />}/>
      </Routes>
  )
}

export default App;
