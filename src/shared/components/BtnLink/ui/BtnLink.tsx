import React from "react";

import { TBtnLinkProps } from "../types/types";
import { StyledBtnLink } from "./styles";

const BtnLink: React.FC<TBtnLinkProps> = ({
  width,
  height,
  color,
  text,
  link,
}) => {
  return (
    <StyledBtnLink color={color} width={width} height={height} href={link}>
      {text}
    </StyledBtnLink>
  );
};

export default BtnLink;
