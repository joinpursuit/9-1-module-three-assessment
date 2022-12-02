import GetImages from "../ForImages";
import "./ImageGenerator";
export default function ImageGenerator({ random_index, selectedImages }) {
  const items = GetImages;
  // console.log(items);

  const mapped = items.map((img) => img.image);
  console.log(mapped);

  const randomImage = () => {
    //random index of image
    random_index = Math.floor(Math.random() * mapped.length);

    //Get an Image the RandomIndex
    selectedImages = mapped[random_index];
  };
  randomImage();

  return (
    <div>
      {" "}
      <span className="pointer">
        {
          <img
            onClick={() => {
              window.location.reload();
            }}
            src={selectedImages}
            alt={selectedImages.name}
          />
        }
      </span>
    </div>
  );
}
