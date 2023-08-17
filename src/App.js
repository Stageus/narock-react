import React from 'react';
import { Routes, Route } from "react-router-dom"

import Admin from "./pages/Admin"
import AllBand from "./pages/AllBand";
import IndividualBand from "./pages/IndividualBand";
import BandPost from "./pages/BandPost";
import BandPostSearch from "./pages/BandPostSearch";
import Community from "./pages/Community";
import CommunityPost from "./pages/CommunityPost";
import Edit from "./pages/Edit"
import FindAccount from "./pages/FindAccount";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Mypage from "./pages/MyPage";
import News from "./pages/News";
import NewsPost from "./pages/NewsPost";
import Notice from "./pages/Notice";
import NoticePost from "./pages/NoticePost";
import ResetPassword from "./pages/ResetPassword";
import Search from "./pages/Search"
import TotalSearch from "./pages/TotalSearch"
import Write from "./pages/Write"


const App = () => {
  return(
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/admin" element={<Admin />}/>
        <Route path="/allband" element={<AllBand />}/>
        <Route path="/allband/:bandname" element={<IndividualBand />}/>
        <Route path="/allband/:bandname/notice" element={<IndividualBand />}/>
        <Route path="/allBand/:bandname/concertInfo" element={<IndividualBand />}/>
        <Route path="/allBand/:bandname/gallery" element={<IndividualBand />}/>
        <Route path="/allBand/:bandname/community" element={<IndividualBand />}/>
        <Route path="/allBand/:bandname/notice/{postnumber}" element={<BandPost />}/>
        <Route path="/allBand/:bandname/concertInfo/{postnumber}" element={<BandPost />}/>
        <Route path="/allBand/:bandname/gallery/{postnumber}" element={<BandPost />}/>
        <Route path="/allBand/:bandname/community/{postnumber}" element={<BandPost />}/>
        <Route path="/allBand/:bandname/notice/search?{keyword}" element={<BandPostSearch />}/>
        <Route path="/allBand/:bandname/concertInfo/search?{keyword}" element={<BandPostSearch />}/>
        <Route path="/allBand/:bandname/gallery/search?{keyword}" element={<BandPostSearch />}/>
        <Route path="/allBand/:bandname/community/search?{keyword}" element={<BandPostSearch />}/>
        <Route path="/community" element={<Community />}/>
        <Route path="/news" element={<News />}/>
        <Route path="/notice" element={<Notice />}/>
        <Route path="/community/:postnumber" element={<CommunityPost />}/>
        <Route path="/news/:postnumber" element={<NewsPost />}/>
        <Route path="/notice/:postnumber" element={<NoticePost />}/>
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
