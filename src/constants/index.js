import { blackImg, blueImg, whiteImg, yellowImg } from "../utils";

export const models = [
  {
    id: 1,
    title: "Natural Chrome",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "Blue Chrome",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "White Chrome",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "Black Chrome",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: "F40", value: "f40" },
  { label: "BBS", value: "bbs" },
];
