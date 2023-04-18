import React from "react";

import { Box } from "../../models/Box";
import "./FaceRecognition.css";

type FaceRecognitionProps = {
  imageRef: React.LegacyRef<HTMLImageElement>;
  imageUrl?: string;
  box?: Box;
};

function FaceRecognition({ imageUrl, box, imageRef }: FaceRecognitionProps) {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        {imageUrl && (
          <img
            id="inputImage"
            alt="inputImage"
            ref={imageRef}
            src={imageUrl}
            width="500px"
            height="auto"
          />
        )}

        {box && (
          <div
            className="boudingBox"
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol,
            }}
          ></div>
        )}
      </div>
    </div>
  );
}

export default FaceRecognition;
