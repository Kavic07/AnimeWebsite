import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-wrapper">
      <h2>
        Welcome to <span>Whymeffs</span> <span>Anime</span>{" "}
        <span>Community</span>
      </h2>
      <p>
        Beyond the <span>screen lies a tapestry of emotions waiting to</span> be
        unraveled.<br></br> Anime is not just{" "}
        <span>entertainment, but an odyssey through the heart and soul</span> of
        storytelling.<br></br>Discover a symphony of{" "}
        <span>
          colors, emotions, and uncharted worlds. Anime, because the universe is
          too
        </span>{" "}
        small for just one reality.
      </p>
      <button>
        <Link className="btn-link" to="https://animepahe.ru/">
          Explore Your Anime World
        </Link>
      </button>
    </div>
  );
};

export default Home;
