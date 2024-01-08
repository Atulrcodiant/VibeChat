import React from "react";
import config from "../../../../config/app.config";
import { Avatar } from "@mui/material";

function AvatarImage({ src, alt = "image", ...rest }) {
  return (
    <>
      <Avatar
        src={`${config.IMAGE_URL_FRONTEND}/${src}`}
        alt={alt}
        {...rest}
      />
    </>
  );
}

export default AvatarImage;
