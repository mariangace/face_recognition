import React, { useState, useRef } from "react";

import { User } from "../../models/User";
import { Box } from "../../models/Box";
import { calculateFaceLocation } from "../../lib/utils";

import { detectFace } from "../../api/Clarifai";
import { registerEntry } from "../../api/Entries";

import ImageLinkForm from "../../components/ImageLinkForm/ImageLinkForm";
import Rank from "../../components/Rank/Rank";
import FaceRecognition from "../../components/FaceRecognition/FaceRecognition";

type HomeProps = {
  loadUser: (user: User) => void;
  user: User;
};

function Home({ loadUser, user }: HomeProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");
  const [box, setBox] = useState<Box>();

  const onInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const newEntry = async () => {
    try {
      const count = await registerEntry({ id: user.id });
      loadUser({ ...user, entries: count });
    } catch (error) {
      //handle error
      console.log(error);
    }
  };

  const onButtonSubmit = async () => {
    setImage(input);
    try {
      const res = await detectFace(input);

      const width = Number(imageRef.current?.width);
      const height = Number(imageRef.current?.height);

      displayFaceBox(calculateFaceLocation(res, width, height));
      console.log(res);
      newEntry();
    } catch (error) {
      //handle error
      console.log(error);
    }
  };

  const displayFaceBox = (box: Box) => {
    setBox(box);
  };

  return (
    <>
      {user && <Rank entries={user.entries} name={user.name} />}
      <ImageLinkForm
        onInputChanges={onInputChanges}
        onButtonSubmit={onButtonSubmit}
      />
      <FaceRecognition imageUrl={image} box={box} imageRef={imageRef} />
    </>
  );
}

export default Home;
