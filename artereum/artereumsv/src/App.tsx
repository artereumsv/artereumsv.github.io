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


export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
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
  const products = 
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
          style={{
            background: "transparent",
            color: "white",
            fontSize: 16,
            fontWeight: 500,
          }}
          items={[
            { key: "1", label: "Inicio" },
            { key: "2", label: "Colecciones" },
            { key: "3", label: "Contacto" },
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
  dialogStyle={{
    padding: 0,                // elimina el borde exterior
    background: "transparent", // fuerza a ZERO border
  }}
  bodyStyle={{
    background: "#141414",
    borderRadius: 20,
    padding: 0,
    height: "80vh",
    overflowY: "auto",
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
  bodyStyle={{
    background: "#0d0d0d",
    borderRadius: 20,
    padding: 20,
    maxHeight: "80vh",
    overflowY: "auto",
    color: "white",
  }}
>
  <Title level={3} style={{ color: "white" }}>
    Términos y Condiciones – Artereum SV
  </Title>

  <div style={{ whiteSpace: "pre-line", color: "#ccc" }}>
    {`Términos y condiciones – Artereum SV
Última actualización: enero 2025

1. Aceptación de los términos
Al acceder o utilizar Artereum SV, tanto compradores como artistas aceptan estos Términos y Condiciones, que constituyen un contrato electrónico válido conforme al Art. 7 de la Ley de Comercio Electrónico (LCE).

La aceptación digital constituye manifestación expresa de voluntad y habilita la ejecución de procesos como la compra, publicación de obras, tokenización conceptual y envío de notificaciones electrónicas.

2. Naturaleza del servicio
Artereum SV opera como un marketplace digital de NFTs y funciona exclusivamente como intermediario, de acuerdo con el Art. 25 LCE.

No es titular de derechos de autor de las obras subidas por artistas.
No actúa como custodio de activos digitales, sino como facilitador conceptual del proceso de compra.
Esta distinción aplica tanto para compradores como para artistas.

3. Registro y uso del sitio
3.1 Disposiciones para compradores
Los compradores pueden navegar el catálogo sin registrarse. Para realizar una compra deben proporcionar los datos mínimos:

Datos de contacto.
Wallet para entrega del NFT.
Aceptación de Términos y Condiciones.
Consentimiento para el tratamiento de datos personales.
Estos datos se utilizan exclusivamente para ejecutar el contrato electrónico y gestionar evidencia y postventa.

3.2 Disposiciones para artistas
Los artistas deben proporcionar:

Identidad o seudónimo profesional.
Medios de contacto.
Declaración de autoría.
Archivos digitales para revisión y tokenización conceptual.
Todo artista se obliga a proporcionar información veraz y confirmar que tiene derecho a publicar/tokenizar las obras.

4. Presentación del producto
4.1 Compradores
Toda obra exhibida debe incluir, conforme al Art. 27 de la Ley de Protección al Consumidor (LPC):

Autor o alias.
Características técnicas del archivo.
Tipo de edición (única o múltiple).
Precio total con comisiones aplicables.
Alcances y limitaciones de uso del NFT.
4.2 Artistas
Los artistas deben garantizar que la información proporcionada sobre su obra:

Es veraz.
No infringe derechos de terceros.
Representa fielmente el contenido entregado.
5. Proceso de compra (exclusivo para compradores)
El proceso sigue estrictamente lo establecido en el Art. 18 LCE:

Información precontractual clara sobre precio total, edición, comisiones y limitaciones.
Presentación del precio final antes de la aceptación.
Pantalla “Revisar y Confirmar compra”, donde el comprador puede corregir errores.
Aceptación expresa del comprador.
Ejecución conceptual del smart contract.
Envío del acuse de recibo al comprador (Art. 19 LCE).
6. Publicación y tokenización conceptual (exclusivo para artistas)
Artereum SV realiza una revisión básica para verificar que la obra:

Cumple estándares mínimos de calidad.
No muestra indicios evidentes de infracción.
Una vez aprobada:

Se genera el NFT conceptualmente.
Se publica la obra en el catálogo.
El artista acepta comisiones, condiciones de venta y responsabilidades por su contenido.
7. Smart contract
El NFT es creado o transferido mediante un smart contract conceptual, cuya ejecución constituye el perfeccionamiento técnico del contrato de compraventa, reconocido por el Art. 7 LCE.

El comprador adquiere la titularidad del token.
El artista recibe la comisión según condiciones acordadas.
Artereum SV conserva evidencia conforme al Art. 20 LCE.
8. Alcances de la compra (propiedad intelectual)
8.1 Derechos del comprador
El comprador recibe:

Titularidad del token NFT.
Una licencia no exclusiva y personal para visualizar la obra digital.
No recibe:

Derechos patrimoniales ni morales del autor.
Permiso de distribución, modificación o comercialización (Arts. 10 y 24 LPI).
8.2 Obligaciones del artista
El artista garantiza que:

Es el titular legítimo de los derechos de autor o cuenta con autorización.
La obra no infringe derechos de terceros.
Autoriza a Artereum SV a exhibir la obra y generar el NFT derivado.
8.3 Limitaciones para ambos
Ningún usuario, sea comprador o artista, puede:

Eludir medidas de seguridad.
Usar la plataforma para actividades ilícitas.
Interferir en procesos técnicos o manipular registros.
9. Política de devoluciones
9.1 Compradores
El comprador podrá solicitar devolución dentro de 48 horas, sujeto a:

El NFT no ha sido transferido a otra wallet.
No existan indicios de fraude.
Se aceptan las limitaciones inherentes:
Gas fees no reembolsables.
Comisiones no recuperables.
Tarifas blockchain ajenas a Artereum SV.
9.2 Artistas
Los artistas aceptan que:

Las devoluciones pueden afectar su comisión.
Deben colaborar en procesos de reclamos de compradores.
No pueden oponerse a devoluciones justificadas dentro del plazo indicado.
10. Responsabilidad del usuario (compradores y artistas)
Ambos roles aceptan:

Proveer información veraz.
No usar la plataforma con fines ilícitos.
No suplantar identidades ni apropiarse de contenido ajeno.
No interferir con procesos técnicos o de seguridad.
Los artistas tienen además responsabilidad directa sobre la legalidad de sus obras.

11. Responsabilidad del marketplace
Conforme al Art. 25 LCE:

Artereum SV no está obligado a supervisar contenido de artistas.
No es responsable por infracciones cometidas por terceros.
Su responsabilidad solo surge cuando tiene conocimiento efectivo de ilegalidad y no actúa con diligencia.
12. Notice & Takedown (contenido ilícito)
Aplica tanto a compradores como artistas. El procedimiento incluye:

Recepción de notificación válida con pruebas.
Bloqueo temporal del NFT denunciado.
Notificación inmediata al artista afectado.
Análisis y resolución.
Contranotificación, si corresponde.
Retirada definitiva o restauración del contenido.
Este proceso cumple Art. 26 LCE y prácticas de propiedad intelectual.

13. Cumplimiento con Instagram / Meta
13.1 Publicaciones del marketplace
Las obras promocionadas en Instagram están sujetas a:

Instagram Community Guidelines.
Instagram Terms of Use.
Instagram Commerce Policies.
Lo que implica:

Artereum SV solo puede usar Instagram como canal informativo, no de transacciones.
Cualquier contenido reportado directamente a Instagram puede ser retirado de forma inmediata por la plataforma, sin intervención de Artereum SV.
Las decisiones de Instagram no están bajo control del marketplace.
13.2 Obligaciones de compradores y artistas
Ambos aceptan que:

Las interacciones en Instagram se rigen por las políticas de Meta.
No deben subir contenido que infrinja derechos de autor o normas comunitarias.
Instagram puede restringir, ocultar o eliminar publicaciones sin previo aviso.
14. Evidencias electrónicas
Artereum SV conservará conforme al Art. 20 LCE:

Versión aceptada de los Términos y Condiciones.
Hash de la transacción.
Comprobante de pago.
Acuse de recibo.
Registro interno asociado al smart contract conceptual.
15. Protección de datos personales
El tratamiento se rige por:

Política de Privacidad.
Política de Tratamiento de Datos Personales.
Política para Compartir Información y Consentimiento.
Estas políticas se integran a estos Términos por referencia.

16. Legislación aplicable
Ley de Comercio Electrónico (LCE).
Ley de Protección al Consumidor (LPC).
Ley de Propiedad Intelectual (LPI).
Ley de Firma Electrónica (LFE).
Ley de Ciberseguridad.`}
  </div>

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
