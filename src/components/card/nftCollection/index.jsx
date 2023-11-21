import React, { useState } from "react";
import Vector from "../../../components/assets/Vector.png";

const ImageUploader = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type === "image/png") {
      const reader = new FileReader();

      reader.onload = (readerEvent) => {
        const imageDataUrl = readerEvent.target.result;
        setImage(imageDataUrl);
      };

      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid PNG file.");
    }
  };
  return (
    <div className="ncgCollection">
      <p style={{textAlign: 'left', marginTop:'-35px'}}>NFT Collection Generator</p>
      <div className="childNcgColec">
        {!image && (
          <span className="containLabel">
            <img className="vector" src={Vector} alt="" />
            <label
              className="labelInput"
              htmlFor="fileInput"
              style={{ cursor: "pointer" }}
            >
              Click or drag file to this area to add NFT Layers
            </label>
            <label
              className="labelInput1"
              htmlFor="fileInput"
              style={{ cursor: "pointer" }}
            >
              Empty folder shouldn’t be added <br />
              Note: Make sure your files are in PNG format
            </label>
          </span>
        )}
        <input
          type="file"
          id="fileInput"
          accept="image/png"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        {image && (
          <div style={{ marginTop: "20px" }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                border: "1px solid #ccc",
              }}
            >
              <img
                src={image}
                alt="Uploaded Preview"
                style={{ width: "100%", height: "auto", objectFit: "cover", padding :'0' }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
