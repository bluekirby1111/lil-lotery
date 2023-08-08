"use client";
import Header from "./header";
import Footer from "./footer";
import Intro from "./intro";

export default function Home() {
  return (
    <>
      <Header title="Lightning"></Header>
      <Intro introText="Win Bitcoin guessing the next bitcoin hash"></Intro>
      <Footer
        title="Lightning"
        footerText="© Lightning Lottery. Made in 2023. All rights reserved."
      ></Footer>
    </>
  );
}
