import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
const AntdHeader = Layout.Header;

interface HeaderProperties {
  displayText: string;
}

const items1: MenuProps["items"] = ["FAQ", "About us", "Contact"].map(
  (key) => ({
    key,
    label: key,
  })
);

const Header: React.FC<HeaderProperties> = ({ displayText }) => {
  return (
    <AntdHeader style={{ display: "flex", alignItems: "center" }}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items1}
      />
    </AntdHeader>
  );
};

export { Header };
