"use client";
import React, { useState } from "react";
import Checkbox from "./components/Checkbox";

export default function TesterConfigs() {


  return (
    <div className="text-center">
      <Checkbox value={true} label={'Show history'} id={'his'} /><a href="#" className="text-orange-400">Clear</a>
      <Checkbox value={true} label={'Show history'} id={'nada'}/>
    </div>
  );
}
