import React from "react";
import LogoutUser from "../compononet/LogoutUser";
import CreateTask from "../compononet/CreateTask";
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="home">
      <LogoutUser />
      <CreateTask />
    </div>
  );
};

export default Home;
