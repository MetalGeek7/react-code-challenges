import { useEffect, useState } from "react";

export default function DogPics() {
  // API: https://dog.ceo/dog-api/
  const [dog, setDog] = useState(
    "https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg"
  );

  const getDogPic = async () => {
    console.debug('Fetching dog pic...')
    const resp = await fetch("https://dog.ceo/api/breeds/image/random");
    const dog = await resp.json();
    return dog.message;
  };

  useEffect(() => {
    getDogPic().then(d => setDog(d));
  }, []);

  return (
    <div className="dog-pics">
      <img src={dog} alt="This is a pic of our closest friend"/>
      <button onClick={async e => setDog(await getDogPic())}>🐶</button>
    </div>
  );
}
