"use client";
import styles from "./page.module.css";

import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

export default function Home() {
  return (
    <main className={styles.main}>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </main>
  );
}
