import React from "react";
import { StDetailFootImage, StDetailFootMainDiv, StDetailFootText } from "./detail.styled";

const DetailFootImage = ({ recipeInfo }) => {
  return (
    <StDetailFootMainDiv>
      <StDetailFootImage src={recipeInfo[0].RECIPE_IMG} alt={recipeInfo[0].RECIPE_TITLE} />
      <StDetailFootText>&#60;INTRODUCE&#62;</StDetailFootText>
      <StDetailFootText>{recipeInfo[0].RECIPE_DESCR}</StDetailFootText>
    </StDetailFootMainDiv>
  );
};

export default DetailFootImage;
