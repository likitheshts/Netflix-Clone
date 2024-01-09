import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestions from "./GPTSuggestions";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          alt="logo"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        ></img>
      </div>
      <GPTSearchBar />
      <GPTSuggestions />
    </div>
  );
};

export default GPTSearch;
