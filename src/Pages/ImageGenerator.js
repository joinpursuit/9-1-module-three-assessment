import { useState, useEffect } from "react";
import GetImages from "../ForImages";

export default function ImageGenerator({ random_index, selectedImages }) {
  const items = GetImages;
  console.log(items);

  const mapped = items.map((img) => img.image);
  console.log(mapped);

  const randomImage = () => {
    //random index of image
    random_index = Math.floor(Math.random() * mapped.length);

    //Get an Image the RandomIndex
    selectedImages = mapped[random_index];
  };

  return (
    <div>
      {" "}
      <span className="">
        <button>Next</button> {<img src={selectedImages} alt={mapped.name} />}{" "}
        images shows here
        <button>Next</button>
      </span>
    </div>
  );
}
