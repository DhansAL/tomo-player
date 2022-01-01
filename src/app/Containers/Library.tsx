import { Component } from "solid-js";
import { AddFileMenu } from "../Components/FileManagement/AddFileMenu";
import { Layout } from "../Components/Layout";

export const Library: Component = () => {
  return (
    <>
      <Layout />
      <div>
        <AddFileMenu />
      </div>
    </>
  );
};
