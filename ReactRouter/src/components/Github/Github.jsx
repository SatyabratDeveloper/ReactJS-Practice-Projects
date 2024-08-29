// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  // const [data, setData] = useState();

  // useEffect(() => {
  //   fetch("https://api.github.com/users/satyabratjha")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);
  return (
    <div className="p-20 bg-slate-100">
      <div className="mb-5 text-2xl">Github Info</div>
      <div>Name: {data.login}</div>
      <div>Id: {data.id}</div>
    </div>
  );
};
export default Github;

export const GitHubInfoLoder = async () => {
  const response = await fetch(
    "https://api.github.com/users/satyabratjha"
  ).then((res) => res.json());

  return response;
};
