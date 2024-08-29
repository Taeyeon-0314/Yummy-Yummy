import React, { useRef, useState } from "react";
import styled from "styled-components";

const MinText = styled.p`
  font-size: 1.3rem;
  margin-top: 10px;
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 10px;
`;

const ImagePreview = styled.img`
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: var(--border-radius);
  box-shadow: 0 0 5px rgb(0, 0, 0, 0.3);
`;

const UploadButton = styled.div`
  width: 220px;
  height: 220px;
  border-radius: var(--border-radius);
  box-shadow: inset 0 0 3px rgb(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const MainImage = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <ImageBox onClick={handleUploadButtonClick}>
        {imageSrc ? (
          <ImagePreview src={imageSrc} alt="미리보기 이미지" />
        ) : (
          <UploadButton>이미지 업로드</UploadButton>
        )}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
        <MinText>1:1 비율의 사진이 예쁘게 나와요❤️</MinText>
      </ImageBox>
    </>
  );
};

export default MainImage;
