import { useEffect, useState } from "react";
import styles from "./blockchain.module.css";

interface BlockchainProperties {
  title: string;
}

const Blockchain: React.FC<BlockchainProperties> = ({ title }) => {
  const [apiInterval, setApiInterval] = useState(0);
  setInterval(() => {
    //TODO: fetch won games nad blocks
  }, apiInterval);
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};

export default Blockchain;
