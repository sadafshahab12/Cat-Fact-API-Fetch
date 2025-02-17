import React, { useEffect, useState } from "react";
import Loading from "./ui/Loading";

const CatRandomImages = () => {
  const [catImages, setCatImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const API_Key = import.meta.env.VITE_CAT_IMAGES_API_KEY;
        const BASE_API_URL =
          "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng";
        const response = await fetch(BASE_API_URL, {
          method: "GET",
          headers: {
            "x-api-key": API_Key,
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP Error! Status : ${response.status}`);
        }
        const data = await response.json();
        setCatImages(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch Cat Images");
        console.log(error);
        setLoading(false);
      }
    };
    fetchImages();
  }, []);
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  const handleopenImage = (imageUrl) => {
    window.open(imageUrl, "_blank");
  };
  return (
    <div className="grid grid-cols-5 gap-4 max-w-5xl mx-auto">
      {catImages.map((image) => (
        <div key={image.id}>
          <img
            src={image.url}
            alt="cat-image"
            className="w-50 h-50 object-cover cursor-pointer"
            onClick={() => handleopenImage(image.url)}
          />
        </div>
      ))}
    </div>
  );
};

export default CatRandomImages;
