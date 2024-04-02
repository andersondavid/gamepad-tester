"use client";
import React, { Dispatch } from "react";
import Checkbox from "./components/Checkbox";

type PropTypes = {
  showButtonsFeedFc: {
    showButtonsFeed: boolean;
    setShowButtonsFeed: Dispatch<boolean>;
  };
};

export default function TesterConfigs({ showButtonsFeedFc }: PropTypes) {
  const { showButtonsFeed, setShowButtonsFeed } = showButtonsFeedFc;

  return (
    <div className="text-center">
      <Checkbox value={true} label={"Show history"} id={"his"} />
      <a href="#" className="text-orange-400">
        Clear
      </a>
      <Checkbox
        value={false}
        label={"Show buttons keys"}
        id={"buttons-feed"}
        dispatch={setShowButtonsFeed}
        state={showButtonsFeed}
      />
    </div>
  );
}
