import {
  Button,
  Card,
  Checkbox,
  Col,
  Input,
  Layout,
  Modal,
  Row,
  Skeleton,
  Typography,
  notification,
} from "antd";
import { useState } from "react";
import SiteHeader from "../components/SiteHeader";
import { termsHtml, type MarketplaceProduct } from "./marketplaceContent";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

type Props = {
  products: MarketplaceProduct[];
  loading?: boolean;
};

export default function MarketplacePage({ products, loading = false }: Props) {
  const [selectedProduct, setSelectedProduct] = useState<MarketplaceProduct | null>(null);
  const [open, setOpen] = useState(false);
  const merchantWallet = "0x1234567890abcdefABCDEF1234567890abcdef12";
  const [openTerms, setOpenTerms] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [txHash, setTxHash] = useState("");

  const notifyPaymentSuccess = () => {
    notification.success({
      message: "Pago realizado",
      description: "Se enviará su compra al correo electrónico.",
      placement: "topRight",
    });
  };

  return (
    <Layout style={{ background: "#0d0d0d", height: "100vh", overflow: "hidden" }}>
      <SiteHeader onOpenTerms={() => setOpenTerms(true)} />

      <Content
        style={{
          marginTop: 80,
          height: "calc(100vh - 80px)",
          overflowY: "auto",
          padding: "20px 20px 40px",
        }}
      >
        <div style={{ width: "100%", boxSizing: "border-box" }}>
          <Row gutter={[24, 24]} justify="center" style={{ width: "100%", margin: 0 }}>
            {loading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <Col key={`skeleton-${index}`} xs={24} sm={12} md={8} lg={6}>
                    <Card
                      style={{
                        background: "#141414",
                        borderRadius: 20,
                        borderColor: "#1f1f1f",
                      }}
                    >
                      <Skeleton.Image active style={{ width: "100%", height: 220 }} />
                      <Skeleton active paragraph={{ rows: 4 }} title />
                    </Card>
                  </Col>
                ))
              : products.map((p) => (
                  <Col key={p.id} xs={24} sm={12} md={8} lg={6}>
                    <Card
                      hoverable
                      style={{ background: "#141414", borderRadius: 20 }}
                      cover={
                        <img
                          src={p.image}
                          alt={p.name}
                          style={{
                            padding: 20,
                            height: 220,
                            objectFit: "cover",
                            borderRadius: 16,
                          }}
                        />
                      }
                    >
                      <Title level={4} style={{ color: "white" }}>
                        {p.name}
                      </Title>
                      <Paragraph style={{ color: "#bfbfbf" }}>{p.description}</Paragraph>
                      <Title level={5} style={{ color: "#4fa3ff", marginBottom: 20 }}>
                        ${p.price} / Ξ{p.ethPrice}
                      </Title>
                      <Paragraph style={{ color: "#bfbfbf" }}>{p.author}</Paragraph>
                      <Paragraph style={{ color: "#bfbfbf" }}>{p.edition}</Paragraph>
                      <Paragraph style={{ color: "#bfbfbf" }}>
                        {p.technical.format} | {p.technical.dimensions} | {p.technical.size} |{" "}
                        {p.technical.resolution}
                      </Paragraph>

                      <Button
                        type="primary"
                        block
                        style={{
                          background: "linear-gradient(90deg, #4fa3ff, #b37cff)",
                          border: "none",
                          borderRadius: 12,
                        }}
                        onClick={() => {
                          setSelectedProduct(p);
                          setOpen(true);
                        }}
                      >
                        Comprar
                      </Button>
                    </Card>
                  </Col>
                ))}
          </Row>

          <Modal
            open={open}
            onCancel={() => setOpen(false)}
            footer={null}
            centered
            width={780}
            style={{ padding: 0, margin: 0 }}
            bodyStyle={{
              background: "#141414",
              borderRadius: 20,
              padding: 0,
              height: "80vh",
              overflowY: "auto",
            }}
            styles={{
              container: {
                padding: 0,
                background: "transparent",
                borderRadius: 20,
                overflow: "hidden",
              },
            }}
            modalRender={(node) => (
              <div
                style={{
                  padding: 0,
                  margin: 0,
                  borderRadius: 20,
                  overflow: "hidden",
                  background: "transparent",
                }}
              >
                {node}
              </div>
            )}
          >
            {selectedProduct && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 0,
                  width: "100%",
                  minHeight: 350,
                }}
              >
                <div
                  style={{
                    width: "45%",
                    background: "#0d0d0d",
                    padding: 20,
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    style={{ width: "100%", borderRadius: 14, objectFit: "cover" }}
                  />
                </div>

                <div
                  style={{
                    width: "55%",
                    padding: "20px 25px",
                    background: "#141414",
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Title level={3} style={{ color: "white", margin: 0 }}>
                      {selectedProduct.name}
                    </Title>
                    <Paragraph style={{ color: "#bfbfbf", marginTop: 4 }}>
                      {selectedProduct.description}
                    </Paragraph>
                    <Title level={4} style={{ color: "#4fa3ff", marginTop: 12 }}>
                      ${selectedProduct.price} / Ξ{selectedProduct.ethPrice}
                    </Title>
                    <Paragraph style={{ color: "#bfbfbf" }}>
                      <strong>El precio incluye 10% de comisión:</strong> $
                      {selectedProduct.price * 0.1} / Ξ{selectedProduct.ethPrice * 0.1}
                    </Paragraph>
                    <Paragraph style={{ color: "#bfbfbf" }}>
                      <strong>Autor:</strong> {selectedProduct.author}
                    </Paragraph>
                    <Paragraph style={{ color: "#bfbfbf" }}>
                      <strong>Edición:</strong> {selectedProduct.edition}
                    </Paragraph>
                    <Paragraph style={{ color: "#bfbfbf" }}>
                      <strong>Formato:</strong> {selectedProduct.technical.format}
                      <br />
                      <strong>Dimensiones:</strong> {selectedProduct.technical.dimensions}
                      <br />
                      <strong>Tamaño:</strong> {selectedProduct.technical.size}
                      <br />
                      <strong>Resolución:</strong> {selectedProduct.technical.resolution}
                    </Paragraph>

                    <Button
                      type="link"
                      style={{ color: "#4fa3ff", paddingLeft: 0 }}
                      onClick={() => setOpenTerms(true)}
                    >
                      Ver Términos y Condiciones
                    </Button>

                    <Checkbox
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      style={{ color: "white" }}
                    >
                      Acepto los Términos y Condiciones
                    </Checkbox>
                  </div>

                  <div style={{ marginTop: 10 }}>
                    <div
                      style={{
                        background: "#0d0d0d",
                        padding: 12,
                        borderRadius: 10,
                        border: "1px solid #333",
                        wordBreak: "break-all",
                      }}
                    >
                      <Paragraph style={{ color: "#bfbfbf", marginBottom: 4 }}>
                        <strong>Enviar pago a:</strong>
                      </Paragraph>
                      <Paragraph style={{ color: "#4fa3ff", fontSize: 16, margin: 0 }}>
                        {merchantWallet}
                      </Paragraph>
                    </div>
                    <div style={{ marginTop: 15 }}>
                      <Paragraph style={{ color: "#bfbfbf" }}>
                        <strong>Hash / comprobante de transacción Ethereum:</strong>
                      </Paragraph>
                      <Input
                        placeholder="Ejemplo: 0x123abc..."
                        value={txHash}
                        onChange={(e) => setTxHash(e.target.value)}
                        style={{
                          background: "#0d0d0d",
                          color: "white",
                          border: "1px solid #444",
                          borderRadius: 10,
                        }}
                      />
                    </div>
                    <div style={{ marginTop: 15 }}>
                      <Paragraph style={{ color: "#bfbfbf" }}>
                        <strong>Confirmar correo electrónico:</strong>
                      </Paragraph>
                      <Input
                        placeholder="correo@ejemplo.com"
                        style={{
                          background: "#0d0d0d",
                          color: "white",
                          border: "1px solid #444",
                          borderRadius: 10,
                        }}
                      />
                    </div>
                    <div style={{ marginTop: 15 }}>
                      <Paragraph style={{ color: "#bfbfbf" }}>
                        <strong>Billetera que recibe el NFT:</strong>
                      </Paragraph>
                      <Input
                        placeholder="Ejemplo: 0x123abc..."
                        style={{
                          background: "#0d0d0d",
                          color: "white",
                          border: "1px solid #444",
                          borderRadius: 10,
                        }}
                      />
                    </div>

                    <Button
                      type="primary"
                      block
                      disabled={!acceptedTerms || txHash.length < 10}
                      style={{
                        marginTop: 20,
                        background: acceptedTerms
                          ? "linear-gradient(90deg, #4fa3ff, #b37cff)"
                          : "#333",
                        border: "none",
                        height: 45,
                        fontSize: 16,
                        borderRadius: 12,
                        opacity: acceptedTerms ? 1 : 0.5,
                      }}
                      onClick={() => {
                        notifyPaymentSuccess();
                        setOpen(false);
                      }}
                    >
                      Confirmar Pago
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Modal>

          <Modal
            open={openTerms}
            onCancel={() => setOpenTerms(false)}
            footer={null}
            centered
            width={700}
            title="Términos y condiciones"
            zIndex={2000}
            closeIcon={<span style={{ color: "white", fontSize: 18 }}>×</span>}
            bodyStyle={{
              background: "#1A1A1A",
              padding: 20,
              maxHeight: "80vh",
              overflowY: "auto",
              color: "white",
            }}
            styles={{
              container: { background: "#000", borderRadius: 0 },
              header: { background: "#000", color: "white", borderRadius: 0 },
              body: { background: "#1A1A1A", borderRadius: 0 },
              title: { color: "white" },
            }}
          >
            <div
              style={{ color: "#d9d9d9", lineHeight: 1.7, display: "grid", gap: 12 }}
              dangerouslySetInnerHTML={{ __html: termsHtml }}
            />

            <Button
              block
              type="primary"
              style={{
                marginTop: 20,
                background: "linear-gradient(90deg, #4fa3ff, #b37cff)",
                border: "none",
                height: 45,
                borderRadius: 12,
              }}
              onClick={() => setOpenTerms(false)}
            >
              Cerrar
            </Button>
          </Modal>
        </div>
      </Content>
    </Layout>
  );
}
