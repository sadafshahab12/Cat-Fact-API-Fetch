import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-slate-800 text-white flex justify-between h-15 items-center px-5 ">
      <h1 className="text-2xl font-bold">Free APIs</h1>
      <ul className=" flex gap-5 ">
        <li>
          <Link to={"/cat-fact"}>Cat Fact</Link>
        </li>
        <li>
          <Link to={"/cat-images"}>Cat Random Images</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
