import "./Home.css";
import ImageGenerator from "./ImageGenerator";
export default function Home({ random_index, selectedImages }) {
  return (
    <div className="home">
      {" "}
      <h1>Welcome to GhibliApp</h1>
      <br />
      <p style={{ border: "1px solid black", margin: "50px", padding: "50px" }}>
        ADD an image later
      </p>
      <ImageGenerator
        selectedImages={selectedImages}
        random_index={random_index}
      />
    </div>
  );
}
