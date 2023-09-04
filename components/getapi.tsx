import { FC } from "react";
import { type Donation } from "@/utils/types"; 

import { API_URL } from "@/utils/api"; 
const Getapi =  async () => {
  const res = await fetch(API_URL, {
  });
  const data = (await res.json()) as Donation;
  console.log("This is fetching data from server.");
  return <data/>;
};

export default Getapi;
