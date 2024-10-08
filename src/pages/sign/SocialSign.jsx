import React from "react";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";
import kakaoLogo from "../../assets/images/kakao-logo.png";
import githubLogo from "../../assets/images/github-logo.png";
import googleLogo from "../../assets/images/google-logo.png";

const SocialSign = () => {
  const { signInWithKakao, signInWithGithub, signInWithGoogle } = useAuth();

  const Social = [
    {
      src: kakaoLogo,
      alt: "kakao-logo",
      onClick: signInWithKakao
    },
    {
      src: githubLogo,
      alt: "github-logo",
      onClick: signInWithGithub
    },
    {
      src: googleLogo,
      alt: "google-logo",
      onClick: signInWithGoogle
    }
  ];
  return (
    <SocialWrap>
      {Social.map((app, index) => {
        return (
          <SocialLogoBox key={index}>
            <SocialLogoImg src={app.src} alt={app.alt} onClick={app.onClick} />
          </SocialLogoBox>
        );
      })}
    </SocialWrap>
  );
};

export default SocialSign;

const SocialWrap = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  margin-bottom: 30px;
`;
const SocialLogoBox = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
const SocialLogoImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
