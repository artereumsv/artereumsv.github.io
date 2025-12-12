import { Card, Row, Col, Button, Typography, Layout, Menu, Checkbox, Input, notification} from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { useState } from "react";

import logo from "./assets/logo.jpeg";
import img1 from "./assets/Imagen 1.jpg";
import img2 from "./assets/Imagen 2.jpg";
import img3 from "./assets/Imagen 3.jpg";
import img4 from "./assets/Imagen 4.jpg";
import img5 from "./assets/Imagen 5.jpg";
import img6 from "./assets/Imagen 6.jpg";
import img7 from "./assets/Imagen 7.jpg";
import img8 from "./assets/Imagen 8.jpg";
import img9 from "./assets/Imagen 9.jpg";
import img10 from "./assets/Imagen 10.jpg";
import img11 from "./assets/Imagen 11.jpg";
import img12 from "./assets/Imagen 12.jpg";
import img13 from "./assets/Imagen 13.jpg";
import img14 from "./assets/Imagen 14.jpg";
import img15 from "./assets/Imagen 15.jpg";

const { Title, Paragraph } = Typography;
const { Header, Content } = Layout;

type TechnicalInfo = {
  format: string;
  dimensions: string;
  size: string;
  resolution: string;
};

type Product = {
  id: number;
  name: string;
  price: number;
  ethPrice: number;
  description: string;
  image: string;
  author: string;
  technical: TechnicalInfo;
  edition: string;
};

const termsHtml = `
<h3>1. Aceptacion de los terminos</h3>
<p>Al acceder o utilizar Artereum SV, tanto compradores como artistas aceptan estos Terminos y Condiciones, que constituyen un contrato electronico valido conforme al Art. 7 de la Ley de Comercio Electronico (LCE).</p>
<p>La aceptacion digital constituye manifestacion expresa de voluntad y habilita la ejecucion de procesos como la compra, publicacion de obras, tokenizacion conceptual y envio de notificaciones electronicas.</p>

<h3>2. Naturaleza del servicio</h3>
<p>Artereum SV opera como un marketplace digital de NFTs y funciona exclusivamente como intermediario, de acuerdo con el Art. 25 LCE.</p>
<ul>
  <li>No es titular de derechos de autor de las obras subidas por artistas.</li>
  <li>No actua como custodio de activos digitales, sino como facilitador conceptual del proceso de compra.</li>
</ul>
<p>Esta distincion aplica tanto para compradores como para artistas.</p>

<h3>3. Registro y uso del sitio</h3>
<h4>3.1 Disposiciones para compradores</h4>
<p>Los compradores pueden navegar el catalogo sin registrarse. Para realizar una compra deben proporcionar los datos minimos:</p>
<ul>
  <li>Datos de contacto.</li>
  <li>Wallet para entrega del NFT.</li>
  <li>Aceptacion de Terminos y Condiciones.</li>
  <li>Consentimiento para el tratamiento de datos personales.</li>
</ul>
<p>Estos datos se utilizan exclusivamente para ejecutar el contrato electronico y gestionar evidencia y postventa.</p>

<h4>3.2 Disposiciones para artistas</h4>
<p>Los artistas deben proporcionar:</p>
<ul>
  <li>Identidad o seudonimo profesional.</li>
  <li>Medios de contacto.</li>
  <li>Declaracion de autoria.</li>
  <li>Archivos digitales para revision y tokenizacion conceptual.</li>
</ul>
<p>Todo artista se obliga a proporcionar informacion veraz y confirmar que tiene derecho a publicar/tokenizar las obras.</p>

<h3>4. Presentacion del producto</h3>
<h4>4.1 Compradores</h4>
<p>Toda obra exhibida debe incluir, conforme al Art. 27 de la Ley de Proteccion al Consumidor (LPC):</p>
<ul>
  <li>Autor o alias.</li>
  <li>Caracteristicas tecnicas del archivo.</li>
  <li>Tipo de edicion (unica o multiple).</li>
  <li>Precio total con comisiones aplicables.</li>
  <li>Alcances y limitaciones de uso del NFT.</li>
</ul>

<h4>4.2 Artistas</h4>
<p>Los artistas deben garantizar que la informacion proporcionada sobre su obra:</p>
<ul>
  <li>Es veraz.</li>
  <li>No infringe derechos de terceros.</li>
  <li>Representa fielmente el contenido entregado.</li>
</ul>

<h3>5. Proceso de compra (exclusivo para compradores)</h3>
<p>El proceso sigue estrictamente lo establecido en el Art. 18 LCE:</p>
<ol>
  <li>Informacion precontractual clara sobre precio total, edicion, comisiones y limitaciones.</li>
  <li>Presentacion del precio final antes de la aceptacion.</li>
  <li>Pantalla "Revisar y Confirmar compra", donde el comprador puede corregir errores.</li>
  <li>Aceptacion expresa del comprador.</li>
  <li>Ejecucion conceptual del smart contract.</li>
  <li>Envio del acuse de recibo al comprador (Art. 19 LCE).</li>
</ol>

<h3>6. Publicacion y tokenizacion conceptual (exclusivo para artistas)</h3>
<p>Artereum SV realiza una revision basica para verificar que la obra:</p>
<ul>
  <li>Cumple estandares minimos de calidad.</li>
  <li>No muestra indicios evidentes de infraccion.</li>
</ul>
<p>Una vez aprobada:</p>
<ul>
  <li>Se genera el NFT conceptualmente.</li>
  <li>Se publica la obra en el catalogo.</li>
  <li>El artista acepta comisiones, condiciones de venta y responsabilidades por su contenido.</li>
</ul>

<h3>7. Smart contract</h3>
<p>El NFT es creado o transferido mediante un smart contract conceptual, cuya ejecucion constituye el perfeccionamiento tecnico del contrato de compraventa, reconocido por el Art. 7 LCE.</p>
<ul>
  <li>El comprador adquiere la titularidad del token.</li>
  <li>El artista recibe la comision segun condiciones acordadas.</li>
  <li>Artereum SV conserva evidencia conforme al Art. 20 LCE.</li>
</ul>

<h3>8. Alcances de la compra (propiedad intelectual)</h3>
<h4>8.1 Derechos del comprador</h4>
<p>El comprador recibe:</p>
<ul>
  <li>Titularidad del token NFT.</li>
  <li>Una licencia no exclusiva y personal para visualizar la obra digital.</li>
</ul>
<p>No recibe:</p>
<ul>
  <li>Derechos patrimoniales ni morales del autor.</li>
  <li>Permiso de distribucion, modificacion o comercializacion (Arts. 10 y 24 LPI).</li>
</ul>

<h4>8.2 Obligaciones del artista</h4>
<p>El artista garantiza que:</p>
<ul>
  <li>Es el titular legitimo de los derechos de autor o cuenta con autorizacion.</li>
  <li>La obra no infringe derechos de terceros.</li>
  <li>Autoriza a Artereum SV a exhibir la obra y generar el NFT derivado.</li>
</ul>

<h4>8.3 Limitaciones para ambos</h4>
<p>Ningun usuario, sea comprador o artista, puede:</p>
<ul>
  <li>Eludir medidas de seguridad.</li>
  <li>Usar la plataforma para actividades ilicitas.</li>
  <li>Interferir en procesos tecnicos o manipular registros.</li>
</ul>

<h3>9. Politica de devoluciones</h3>
<h4>9.1 Compradores</h4>
<p>El comprador podra solicitar devolucion dentro de 48 horas, sujeto a:</p>
<ul>
  <li>El NFT no ha sido transferido a otra wallet.</li>
  <li>No existan indicios de fraude.</li>
  <li>Se aceptan las limitaciones inherentes:
    <ul>
      <li>Gas fees no reembolsables.</li>
      <li>Comisiones no recuperables.</li>
      <li>Tarifas blockchain ajenas a Artereum SV.</li>
    </ul>
  </li>
</ul>

<h4>9.2 Artistas</h4>
<p>Los artistas aceptan que:</p>
<ul>
  <li>Las devoluciones pueden afectar su comision.</li>
  <li>Deben colaborar en procesos de reclamos de compradores.</li>
  <li>No pueden oponerse a devoluciones justificadas dentro del plazo indicado.</li>
</ul>

<h3>10. Responsabilidad del usuario (compradores y artistas)</h3>
<p>Ambos roles aceptan:</p>
<ul>
  <li>Proveer informacion veraz.</li>
  <li>No usar la plataforma con fines ilicitos.</li>
  <li>No suplantar identidades ni apropiarse de contenido ajeno.</li>
  <li>No interferir con procesos tecnicos o de seguridad.</li>
</ul>
<p>Los artistas tienen ademas responsabilidad directa sobre la legalidad de sus obras.</p>

<h3>11. Responsabilidad del marketplace</h3>
<p>Conforme al Art. 25 LCE:</p>
<ul>
  <li>Artereum SV no esta obligado a supervisar contenido de artistas.</li>
  <li>No es responsable por infracciones cometidas por terceros.</li>
  <li>Su responsabilidad solo surge cuando tiene conocimiento efectivo de ilegalidad y no actua con diligencia.</li>
</ul>

<h3>12. Notice & Takedown (contenido ilicito)</h3>
<p>Aplica tanto a compradores como artistas. El procedimiento incluye:</p>
<ol>
  <li>Recepcion de notificacion valida con pruebas.</li>
  <li>Bloqueo temporal del NFT denunciado.</li>
  <li>Notificacion inmediata al artista afectado.</li>
  <li>Analisis y resolucion.</li>
  <li>Contranotificacion, si corresponde.</li>
  <li>Retirada definitiva o restauracion del contenido.</li>
</ol>
<p>Este proceso cumple Art. 26 LCE y practicas de propiedad intelectual.</p>

<h3>13. Cumplimiento con Instagram / Meta</h3>
<h4>13.1 Publicaciones del marketplace</h4>
<p>Las obras promocionadas en Instagram estan sujetas a:</p>
<ul>
  <li>Instagram Community Guidelines.</li>
  <li>Instagram Terms of Use.</li>
  <li>Instagram Commerce Policies.</li>
</ul>
<p>Lo que implica:</p>
<ul>
  <li>Artereum SV solo puede usar Instagram como canal informativo, no de transacciones.</li>
  <li>Cualquier contenido reportado directamente a Instagram puede ser retirado de forma inmediata por la plataforma, sin intervencion de Artereum SV.</li>
  <li>Las decisiones de Instagram no estan bajo control del marketplace.</li>
</ul>

<h4>13.2 Obligaciones de compradores y artistas</h4>
<p>Ambos aceptan que:</p>
<ul>
  <li>Las interacciones en Instagram se rigen por las politicas de Meta.</li>
  <li>No deben subir contenido que infrinja derechos de autor o normas comunitarias.</li>
  <li>Instagram puede restringir, ocultar o eliminar publicaciones sin previo aviso.</li>
</ul>

<h3>14. Evidencias electronicas</h3>
<p>Artereum SV conservara conforme al Art. 20 LCE:</p>
<ul>
  <li>Version aceptada de los Terminos y Condiciones.</li>
  <li>Hash de la transaccion.</li>
  <li>Comprobante de pago.</li>
  <li>Acuse de recibo.</li>
  <li>Registro interno asociado al smart contract conceptual.</li>
</ul>

<h3>15. Proteccion de datos personales</h3>
<p>El tratamiento se rige por:</p>
<ul>
  <li>Politica de Privacidad.</li>
  <li>Politica de Tratamiento de Datos Personales.</li>
  <li>Politica para Compartir Informacion y Consentimiento.</li>
</ul>
<p>Estas politicas se integran a estos Terminos por referencia.</p>

<h3>16. Legislacion aplicable</h3>
<ul>
  <li>Ley de Comercio Electronico (LCE).</li>
  <li>Ley de Proteccion al Consumidor (LPC).</li>
  <li>Ley de Propiedad Intelectual (LPI).</li>
  <li>Ley de Firma Electronica (LFE).</li>
  <li>Ley de Ciberseguridad.</li>
</ul>
`;

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
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

// Dirección donde recibirás el pago ETH
  const products: Product[] = 
    [
  { id: 1,  name: "Eclipse Neón",          price: 50,  ethPrice: 0.0151, description: "Obra digital inspirada en fenómenos cósmicos reinterpretados en estilo ciberpunk.", image: img1,
    author: "AetherFlux",
    technical: { format: "PNG", dimensions: "3500x4500 px", size: "8.2 MB", resolution: "4K" },
    edition: "Única"
  },

  { id: 2,  name: "Código Ancestral",      price: 50,  ethPrice: 0.0151, description: "Representación artística de un pasado mítico mezclado con códigos modernos.", image: img2,
    author: "NeoTotem",
    technical: { format: "JPG", dimensions: "3000x4200 px", size: "6.7 MB", resolution: "4K" },
    edition: "Limitada (25 unidades)"
  },

  { id: 3,  name: "Horizonte Virtual",     price: 50,  ethPrice: 0.0151, description: "Paisaje virtual que fusiona arquitectura futurista con elementos minimalistas.", image: img3,
    author: "LumenEdge",
    technical: { format: "PNG", dimensions: "4096x4096 px", size: "9.1 MB", resolution: "4K" },
    edition: "Múltiple (100 unidades)"
  },

  { id: 4,  name: "Luz de la Memoria",     price: 50,  ethPrice: 0.0151, description: "Pieza emocional que explora la luz, el recuerdo y la abstracción digital.", image: img4,
    author: "AstraMira",
    technical: { format: "PNG", dimensions: "3600x4800 px", size: "7.4 MB", resolution: "4K" },
    edition: "Única"
  },

  { id: 5,  name: "Ciudad Holográfica",    price: 60,  ethPrice: 0.0181, description: "Ciudad conceptual creada a partir de elementos holográficos y energía luminosa.", image: img5,
    author: "PixelHaze",
    technical: { format: "JPG", dimensions: "4000x4000 px", size: "5.8 MB", resolution: "2K" },
    edition: "Limitada (50 unidades)"
  },

  { id: 6,  name: "Fragmentos del Tiempo", price: 60,  ethPrice: 0.0181, description: "Exploración visual del tiempo como elemento fragmentado y dinámico.", image: img6,
    author: "ChronoWave",
    technical: { format: "PNG", dimensions: "3300x4500 px", size: "8.9 MB", resolution: "4K" },
    edition: "Única"
  },

  { id: 7,  name: "Flor Cuántica",         price: 70,  ethPrice: 0.0211, description: "Flor digital formada por energía cuántica y partículas sintéticas.", image: img7,
    author: "QuantumBloom",
    technical: { format: "PNG", dimensions: "4500x4500 px", size: "10.1 MB", resolution: "4K" },
    edition: "Limitada (10 unidades)"
  },

  { id: 8,  name: "Vórtice Dorado",        price: 70,  ethPrice: 0.0211, description: "Vórtice brillante que simboliza transformación y transición energética.", image: img8,
    author: "NovaDrift",
    technical: { format: "JPG", dimensions: "3800x4200 px", size: "6.2 MB", resolution: "2K" },
    edition: "Múltiple (80 unidades)"
  },

  { id: 9,  name: "Neblina Digital",       price: 80,  ethPrice: 0.0242, description: "Ambiente digital atmosférico construido con neblina y geometría minimal.", image: img9,
    author: "MistCoder",
    technical: { format: "PNG", dimensions: "4096x4096 px", size: "9.4 MB", resolution: "4K" },
    edition: "Única"
  },

  { id: 10, name: "Amanecer Sintético",    price: 70,  ethPrice: 0.0211, description: "Reinterpretación de un amanecer usando lenguaje visual sintético.", image: img10,
    author: "SolarBit",
    technical: { format: "PNG", dimensions: "3600x3600 px", size: "7.1 MB", resolution: "4K" },
    edition: "Limitada (20 unidades)"
  },

  { id: 11, name: "Tormenta de Datos",     price: 95,  ethPrice: 0.0287, description: "Tormenta dinámica hecha de datos y estructuras tecnológicas.", image: img11,
    author: "DataStormer",
    technical: { format: "JPG", dimensions: "4200x3500 px", size: "6.9 MB", resolution: "2K" },
    edition: "Múltiple (120 unidades)"
  },

  { id: 12, name: "Ritual Binario",        price: 55,  ethPrice: 0.0166, description: "Representación ritualista que mezcla código, misterio y luz.", image: img12,
    author: "HexPriest",
    technical: { format: "PNG", dimensions: "3500x4500 px", size: "7.9 MB", resolution: "4K" },
    edition: "Única"
  },

  { id: 13, name: "Camino Lúcido",         price: 50,  ethPrice: 0.0151, description: "Viaje onírico plasmado en un camino luminoso y surreal.", image: img13,
    author: "DreamSync",
    technical: { format: "PNG", dimensions: "4096x4096 px", size: "8.4 MB", resolution: "4K" },
    edition: "Limitada (15 unidades)"
  },

  { id: 14, name: "Reflejo Fractal",       price: 110, ethPrice: 0.0332, description: "Diseño fractal hipnótico con reflejos infinitos.", image: img14,
    author: "FractalMind",
    technical: { format: "PNG", dimensions: "5000x5000 px", size: "12.2 MB", resolution: "5K" },
    edition: "Única"
  },

  { id: 15, name: "Aurora del Pixel",      price: 50,  ethPrice: 0.0151, description: "Aurora digital vibrante construida con patrones pixelados.", image: img15,
    author: "PixelAura",
    technical: { format: "JPG", dimensions: "3800x4000 px", size: "5.5 MB", resolution: "2K" },
    edition: "Múltiple (100 unidades)"
  }
]
;

  return (
    <Layout
      style={{
        background: "#0d0d0d",
        height: "100vh",          // 🔥 PANTALLA COMPLETA REAL
        overflow: "hidden",       // No scroll externo
      }}
    >

      {/* 🔵 NAVBAR FIJA */}
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
        {/* LOGO + TÍTULO */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img
            src={logo}
            alt="Artereum"
            style={{
              width: 50,
              height: 50,
              borderRadius: 10,
              objectFit: "cover",
            }}
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

        {/* Menú (opcional) */}
        <Menu
          theme="dark"
          mode="horizontal"
          onClick={({ key }) => {
            if (key === "tyc") {
              setOpenTerms(true);
            }
          }}
          style={{
            background: "transparent",
            color: "white",
            fontSize: 16,
            fontWeight: 500,
          }}
          items={[
            { key: "tyc", label: "Términos y condiciones" },
            { key: "home", label: "Inicio" },
            { key: "collections", label: "Colecciones" },
            { key: "contact", label: "Contacto" },
          ]}
        />

        {/* Icono móvil oculto por ahora */}
        <MenuOutlined style={{ display: "none", color: "white", fontSize: 24 }} />
      </Header>

      {/* 🟣 CONTENEDOR SCROLLABLE (debajo del header) */}
      <Content
        style={{
          marginTop: 80,           // deja espacio por la navbar
          height: "calc(100vh - 80px)", // 🔥 FULLSCREEN real
          overflowY: "auto",       // scroll SOLO aquí (no se oculta el logo)
          padding: "20px 20px 40px",
        }}
      >
        <div style={{ width: "100%", boxSizing: "border-box" }}>
        <Row
          gutter={[24, 24]}
          justify="center"
          style={{
            width: "100%",
            margin: 0,
          }}
        >
          {products.map((p) => (
            <Col key={p.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                style={{
                  background: "#141414",
                  borderRadius: 20,
                }}
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

                <Paragraph style={{ color: "#bfbfbf" }}>
                  {p.description}
                </Paragraph>

                <Title level={5} style={{ color: "#4fa3ff", marginBottom: 20 }}>
                  ${p.price} / Ξ{p.ethPrice}
                </Title>
                <Paragraph style={{ color: "#bfbfbf" }}>
                  {p.author}
                </Paragraph>
                 <Paragraph style={{ color: "#bfbfbf" }}>
                  {p.edition}
                </Paragraph>
                 <Paragraph style={{ color: "#bfbfbf" }}>
                  {p.technical.format} | {p.technical.dimensions} | {p.technical.size} | {p.technical.resolution}
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
  style={{
    padding: 0, 
    margin: 0,                  // elimina espacio externo
  }}
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
      {/* 🖼️ IMAGEN IZQUIERDA */}
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
          style={{
            width: "100%",
            borderRadius: 14,
            objectFit: "cover",
          }}
        />
      </div>

      {/* 📝 INFO DERECHA */}
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
        {/* Título */}
        <div>
          <Title level={3} style={{ color: "white", margin: 0 }}>
            {selectedProduct.name}
          </Title>

          <Paragraph style={{ color: "#bfbfbf", marginTop: 4 }}>
            {selectedProduct.description}
          </Paragraph>

          {/* Precio */}
          <Title level={4} style={{ color: "#4fa3ff", marginTop: 12 }}>
            ${selectedProduct.price} / Ξ{selectedProduct.ethPrice}
          </Title>
          {/* Autor */}
          <Paragraph style={{ color: "#bfbfbf" }}>
            <strong>El precio incluye 10% de comisión:</strong> ${selectedProduct.price*0.1} / Ξ{selectedProduct.ethPrice*0.1}
          </Paragraph>

          {/* Autor */}
          <Paragraph style={{ color: "#bfbfbf" }}>
            <strong>Autor:</strong> {selectedProduct.author}
          </Paragraph>

          {/* Edición */}
          <Paragraph style={{ color: "#bfbfbf" }}>
            <strong>Edición:</strong> {selectedProduct.edition}
          </Paragraph>

          {/* Technical info */}
          <Paragraph style={{ color: "#bfbfbf" }}>
            <strong>Formato:</strong> {selectedProduct.technical.format}<br />
            <strong>Dimensiones:</strong> {selectedProduct.technical.dimensions}<br />
            <strong>Tamaño:</strong> {selectedProduct.technical.size}<br />
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


        {/* WALLET + BOTÓN */}
        <div style={{ marginTop: 10 }}>
          {/* Wallet */}
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

            <Paragraph
              style={{
                color: "#4fa3ff",
                fontSize: 16,
                margin: 0,
              }}
            >
              {merchantWallet}
            </Paragraph>
          </div>
{/* CAMPO PARA INGRESAR EL HASH DE LA TRANSACCIÓN */}
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
              <strong>Confirmar Correo electrónico:</strong>
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

          {/* Botón */}
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
  title="Terminos y condiciones"
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
    container: {
      background: "#000",
      borderRadius: 0,
    },
    header: {
      background: "#000",
      color: "white",
      borderRadius: 0,
    },
    body: {
      background: "#1A1A1A",
      borderRadius: 0,
    },
    title: {
      color: "white",
    },
  }}
>
  <div
    style={{
      color: "#d9d9d9",
      lineHeight: 1.7,
      display: "grid",
      gap: 12,
    }}
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
