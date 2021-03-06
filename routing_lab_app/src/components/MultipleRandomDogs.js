import React, { useState, useEffect } from "react";
import axios from "axios";
import Picture from "./Picture";
import { useParams } from "react-router-dom";

const MultipleRandomDogs = () => {
  const [dogPics, setDogs] = useState([]);
  const { num } = useParams();

  useEffect(() => {
    const getManyRandomDogs = async num => {
      try {
        const dogURL = `https://dog.ceo/api/breeds/image/random/${num}`;
        let res = await axios.get(dogURL);
        const dogs = res.data.message.map(dog => {
          return <Picture img={dog} key={dog} />;
        });
        setDogs(dogs);
      } catch (err) {
        setDogs("");
        console.log(err);
      }
    };
    getManyRandomDogs(num);
  }, [num]);

  return <div>{dogPics}</div>;
};

export default MultipleRandomDogs;
