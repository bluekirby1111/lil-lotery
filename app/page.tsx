"use client";
import Header from "./header";
import Footer from "./footer";
import Intro from "./intro";
import Blockchain from "./blockchain";

export default function Home() {
  return (
    <>
      <Header title="Lightning"></Header>
      <Intro introText="Win Bitcoin guessing the next bitcoin hash"></Intro>
      <Blockchain title="Last win blocks"></Blockchain>
      <Footer
        title="Lightning"
        footerText="© Lightning Lottery. Made in 2023. All rights reserved."
      ></Footer>
    </>
  );
}
