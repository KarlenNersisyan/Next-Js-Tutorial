// import Router from "next/router";
import Router from "next/router";
import React from "react";
import MainLayout from "../../components/MainLayout";

export default function About({ title }) {
  const handleClick = () => {
    Router.push("/");
    // console.log("ROUTER", Router);
  };

  return (
    <MainLayout title={"About Page"}>
      <h1>{title}</h1>
      <button onClick={handleClick}> Go To Home Page</button>
      <button onClick={() => Router.push("/posts")}> Go To Post Page</button>
    </MainLayout>
  );
}
