import React from "react";
import { useSpring, animated } from "react-spring";
import { Container, Tabs, Tab, Nav } from "react-bootstrap";
import Navigation from "./Navigation/Navigation";
import HomeTabs from "./Tabs/Tabs";

const Home = () => {
  const props = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -500 },
  });
  const style = {
    backgroundColor: "steelblue",
    padding: "1.5rem",
    color: "white",
  };
  return (
    <>
      <Navigation />
      <HomeTabs />
    </>
  );
};

export default Home;
