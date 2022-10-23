import type { NextPage } from "next";
import router from "next/router";
import Header from "../components/header";

const Home: NextPage = () => {
  return (
    <div
      onClick={() => {
        router.push("./play-game");
      }}
    >
      hi
      <Header />
    </div>
  );
};

export default Home;
