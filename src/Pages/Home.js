import "./Home.css";
import ImageGenerator from "./ImageGenerator";
export default function Home({ random_index, selectedImages }) {
  return (
    <div className="home">
      {" "}
      <h1>Welcome to GhibliApp</h1>
      <br />
      <ImageGenerator
        selectedImages={selectedImages}
        random_index={random_index}
      />
    </div>
  );
}
