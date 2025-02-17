import { useEffect, useState } from "react";
import Loading from "./ui/Loading";

const CatFacts = () => {
  const [fact, setCatFact] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const headers = new Headers();
    headers.append("x-apihub-key", import.meta.env.VITE_API_KEY);
    headers.append("x-apihub-host", import.meta.env.VITE_API_HOST);
    headers.append("x-apihub-endpoint", import.meta.env.VITE_API_ENDPOINT);

    const requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };
    fetch(
      "https://Cat-Fact-API.proxy-production.allthingsdev.co/fact",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setCatFact(data.fact);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  const handleNewFact = () => {
    window.location.reload();
  };
  if (loading) {
    return (
      <div>
        {" "}
        <Loading />
      </div>
    );
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="flex justify-center flex-col items-center h-screen gap-5">
      <h1 className="text-3xl font-bold">Cat Fact</h1>
      <img
        src="https://i.pinimg.com/736x/11/8c/c8/118cc81c633316f14688da16832f90b3.jpg"
        alt="cat"
        className="w-30 h-30 rounded-full"
      />
      <p>{fact}</p>
      <button
        onClick={handleNewFact}
        className="bg-black text-orange-400 py-2 px-4 rounded-md cursor-pointer"
      >
        New Fact
      </button>
    </div>
  );
};

export default CatFacts;
