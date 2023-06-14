import { Container, Flex } from "@mantine/core";
import React from "react";

import {
  RiHeart3Line,
  RiMoonLine,
  RiSunLine,
  RiStarLine,
  RiMapPin2Line,
  RiUserLine,
  RiCamera2Line,
  RiEdit2Line,
  RiFolder2Line,
  RiPlaneLine,
} from "react-icons/ri";

import { Carousel } from "@mantine/carousel";

const iconList = [
  <RiHeart3Line />,
  <RiMoonLine />,
  <RiSunLine />,
  <RiStarLine />,
  <RiMapPin2Line />,
  <RiUserLine />,
  <RiCamera2Line />,
  <RiEdit2Line />,
  <RiFolder2Line />,
  <RiPlaneLine />,
];
function IconCarousel() {
  return (
    <Container>
      <Flex>
        <Carousel slideGap="md" slidesPerView={5} spacing={20}>
          {iconList.map((icon, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 100,
                width: 100,
                backgroundColor: "#FFF",
                cursor: "pointer",
              }}
            >
              {icon}
            </div>
          ))}
        </Carousel>
      </Flex>
    </Container>
  );
}

export default IconCarousel;
