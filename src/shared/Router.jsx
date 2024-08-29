import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import DetailPage from "../pages/detail/DetailPage";
import MyPage from "../pages/mypage/MyPage";
import WritePage from "../pages/write/WritePage";
import SignUpPage from "../pages/sign/signup/SignUpPage";
import SignInPage from "../pages/sign/signin/SignInPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
