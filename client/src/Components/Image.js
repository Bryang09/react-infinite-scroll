import React from "react";

// const Image = ({ img }) => {
//   return <img className="single-photo" src={img.urls.thumb} alt="pic" />;
// };

// export default Image;

export default function Image({ image }) {
  return <img className="single-photo" src={image.urls.thumb} alt="img" />;
}
