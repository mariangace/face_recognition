import { FaceRecognitionData } from "../models/FaceRecognitionData";

export const calculateFaceLocation = (data: FaceRecognitionData,width:number,height:number) => {
  const clarifaiFace =
    data.outputs[0].data.regions[0].region_info.bounding_box;

  return {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - clarifaiFace.right_col * width,
    bottomRow: height - clarifaiFace.bottom_row * height,
  };
};