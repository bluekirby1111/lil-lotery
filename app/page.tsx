"use client";
import styles from "./page.module.css";

import { Layout } from "antd";
import { Header } from "./header";

const { Footer, Content } = Layout;

export default function Home() {
  return (
    <main className={styles.main}>
      <Layout>
        <Header displayText="Lightning"></Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </main>
  );
}
