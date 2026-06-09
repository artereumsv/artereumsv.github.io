import { MenuOutlined } from "@ant-design/icons";
import { Layout, Menu, Typography } from "antd";
import logo from "../assets/logo.jpeg";

const { Header } = Layout;
const { Title } = Typography;

type Props = {
  onOpenTerms?: () => void;
};

function navigate(path: string) {
  if (window.location.pathname !== path) {
    window.location.href = path;
  }
}

export default function SiteHeader({ onOpenTerms }: Props) {
  return (
    <Header
      style={{
        height: 80,
        lineHeight: "80px",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        background: "#141414",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <img
          src={logo}
          alt="Artereum"
          style={{ width: 50, height: 50, borderRadius: 10, objectFit: "cover" }}
        />
        <Title
          level={3}
          style={{
            margin: 0,
            background: "linear-gradient(90deg, #4fa3ff, #b37cff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ARTEREUM
        </Title>
      </div>

      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[]}
        onClick={({ key }) => {
          if (key === "home") {
            navigate("/");
          }

          if (key === "catalog") {
            navigate("/catalog");
          }

          if (key === "tyc") {
            onOpenTerms?.();
          }
        }}
        style={{
          background: "transparent",
          color: "white",
          fontSize: 16,
          fontWeight: 500,
          minWidth: 0,
          flex: 1,
          justifyContent: "flex-end",
        }}
        items={[
          { key: "home", label: "Inicio" },
          { key: "catalog", label: "Catálogo" },
          { key: "tyc", label: "Términos y condiciones" },
        ]}
      />

      <MenuOutlined style={{ display: "none", color: "white", fontSize: 24 }} />
    </Header>
  );
}
