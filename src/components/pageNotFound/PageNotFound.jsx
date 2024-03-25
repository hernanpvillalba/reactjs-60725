import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Box className="imagenError404">
      <Link to="/">
        <img
          src="https://cdn.dribbble.com/users/2989759/screenshots/14802945/media/7e1e0ec8e2ef6e4c8cd9219cee918e01.png?resize=10000x800&vertical=center"
          alt="Error 404"
        />
      </Link>
    </Box>
  );
};

export default PageNotFound;
