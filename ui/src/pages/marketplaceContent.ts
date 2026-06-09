import img1 from "../assets/Imagen 1.jpg";
import img2 from "../assets/Imagen 2.jpg";
import img3 from "../assets/Imagen 3.jpg";
import img4 from "../assets/Imagen 4.jpg";
import img5 from "../assets/Imagen 5.jpg";
import img6 from "../assets/Imagen 6.jpg";
import img7 from "../assets/Imagen 7.jpg";
import img8 from "../assets/Imagen 8.jpg";
import img9 from "../assets/Imagen 9.jpg";
import img10 from "../assets/Imagen 10.jpg";
import img11 from "../assets/Imagen 11.jpg";
import img12 from "../assets/Imagen 12.jpg";
import img13 from "../assets/Imagen 13.jpg";
import img14 from "../assets/Imagen 14.jpg";
import img15 from "../assets/Imagen 15.jpg";

export type TechnicalInfo = {
  format: string;
  dimensions: string;
  size: string;
  resolution: string;
};

export type MarketplaceProduct = {
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

export const termsHtml = `
<h3>1. Aceptación de los términos</h3>
<p>Al acceder o utilizar Artereum SV, tanto compradores como artistas aceptan estos Términos y Condiciones, que constituyen un contrato electrónico válido conforme al Art. 7 de la Ley de Comercio Electrónico (LCE).</p>
<p>La aceptación digital constituye manifestación expresa de voluntad y habilita la ejecución de procesos como la compra, publicación de obras, tokenización conceptual y envío de notificaciones electrónicas.</p>

<h3>2. Naturaleza del servicio</h3>
<p>Artereum SV opera como un marketplace digital de NFTs y funciona exclusivamente como intermediario, de acuerdo con el Art. 25 LCE.</p>
<ul>
  <li>No es titular de derechos de autor de las obras subidas por artistas.</li>
  <li>No actúa como custodio de activos digitales, sino como facilitador conceptual del proceso de compra.</li>
</ul>
<p>Esta distinción aplica tanto para compradores como para artistas.</p>

<h3>3. Registro y uso del sitio</h3>
<h4>3.1 Disposiciones para compradores</h4>
<p>Los compradores pueden navegar el catálogo sin registrarse. Para realizar una compra deben proporcionar los datos mínimos:</p>
<ul>
  <li>Datos de contacto.</li>
  <li>Wallet para entrega del NFT.</li>
  <li>Aceptación de Términos y Condiciones.</li>
  <li>Consentimiento para el tratamiento de datos personales.</li>
</ul>
<p>Estos datos se utilizan exclusivamente para ejecutar el contrato electrónico y gestionar evidencia y postventa.</p>

<h4>3.2 Disposiciones para artistas</h4>
<p>Los artistas deben proporcionar:</p>
<ul>
  <li>Identidad o seudónimo profesional.</li>
  <li>Medios de contacto.</li>
  <li>Declaración de autoría.</li>
  <li>Archivos digitales para revisión y tokenización conceptual.</li>
</ul>
<p>Todo artista se obliga a proporcionar información veraz y confirmar que tiene derecho a publicar o tokenizar las obras.</p>

<h3>4. Presentación del producto</h3>
<h4>4.1 Compradores</h4>
<p>Toda obra exhibida debe incluir, conforme al Art. 27 de la Ley de Protección al Consumidor (LPC):</p>
<ul>
  <li>Autor o alias.</li>
  <li>Características técnicas del archivo.</li>
  <li>Tipo de edición (única o múltiple).</li>
  <li>Precio total con comisiones aplicables.</li>
  <li>Alcances y limitaciones de uso del NFT.</li>
</ul>

<h4>4.2 Artistas</h4>
<p>Los artistas deben garantizar que la información proporcionada sobre su obra:</p>
<ul>
  <li>Es veraz.</li>
  <li>No infringe derechos de terceros.</li>
  <li>Representa fielmente el contenido entregado.</li>
</ul>

<h3>5. Proceso de compra (exclusivo para compradores)</h3>
<p>El proceso sigue estrictamente lo establecido en el Art. 18 LCE:</p>
<ol>
  <li>Información precontractual clara sobre precio total, edición, comisiones y limitaciones.</li>
  <li>Presentación del precio final antes de la aceptación.</li>
  <li>Pantalla "Revisar y Confirmar compra", donde el comprador puede corregir errores.</li>
  <li>Aceptación expresa del comprador.</li>
  <li>Ejecución conceptual del smart contract.</li>
  <li>Envío del acuse de recibo al comprador (Art. 19 LCE).</li>
</ol>

<h3>6. Publicación y tokenización conceptual (exclusivo para artistas)</h3>
<p>Artereum SV realiza una revisión básica para verificar que la obra:</p>
<ul>
  <li>Cumple estándares mínimos de calidad.</li>
  <li>No muestra indicios evidentes de infracción.</li>
</ul>
<p>Una vez aprobada:</p>
<ul>
  <li>Se genera el NFT conceptualmente.</li>
  <li>Se publica la obra en el catálogo.</li>
  <li>El artista acepta comisiones, condiciones de venta y responsabilidades por su contenido.</li>
</ul>

<h3>7. Smart contract</h3>
<p>El NFT es creado o transferido mediante un smart contract conceptual, cuya ejecución constituye el perfeccionamiento técnico del contrato de compraventa, reconocido por el Art. 7 LCE.</p>
<ul>
  <li>El comprador adquiere la titularidad del token.</li>
  <li>El artista recibe la comisión según condiciones acordadas.</li>
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
  <li>Permiso de distribución, modificación o comercialización (Arts. 10 y 24 LPI).</li>
</ul>

<h4>8.2 Obligaciones del artista</h4>
<p>El artista garantiza que:</p>
<ul>
  <li>Es el titular legítimo de los derechos de autor o cuenta con autorización.</li>
  <li>La obra no infringe derechos de terceros.</li>
  <li>Autoriza a Artereum SV a exhibir la obra y generar el NFT derivado.</li>
</ul>

<h4>8.3 Limitaciones para ambos</h4>
<p>Ningún usuario, sea comprador o artista, puede:</p>
<ul>
  <li>Eludir medidas de seguridad.</li>
  <li>Usar la plataforma para actividades ilícitas.</li>
  <li>Interferir en procesos técnicos o manipular registros.</li>
</ul>

<h3>9. Política de devoluciones</h3>
<h4>9.1 Compradores</h4>
<p>El comprador podrá solicitar devolución dentro de 48 horas, sujeto a:</p>
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
  <li>Las devoluciones pueden afectar su comisión.</li>
  <li>Deben colaborar en procesos de reclamos de compradores.</li>
  <li>No pueden oponerse a devoluciones justificadas dentro del plazo indicado.</li>
</ul>

<h3>10. Responsabilidad del usuario (compradores y artistas)</h3>
<p>Ambos roles aceptan:</p>
<ul>
  <li>Proveer información veraz.</li>
  <li>No usar la plataforma con fines ilícitos.</li>
  <li>No suplantar identidades ni apropiarse de contenido ajeno.</li>
  <li>No interferir con procesos técnicos o de seguridad.</li>
</ul>
<p>Los artistas tienen además responsabilidad directa sobre la legalidad de sus obras.</p>

<h3>11. Responsabilidad del marketplace</h3>
<p>Conforme al Art. 25 LCE:</p>
<ul>
  <li>Artereum SV no está obligado a supervisar contenido de artistas.</li>
  <li>No es responsable por infracciones cometidas por terceros.</li>
  <li>Su responsabilidad solo surge cuando tiene conocimiento efectivo de ilegalidad y no actúa con diligencia.</li>
</ul>

<h3>12. Notice & Takedown (contenido ilícito)</h3>
<p>Aplica tanto a compradores como artistas. El procedimiento incluye:</p>
<ol>
  <li>Recepción de notificación válida con pruebas.</li>
  <li>Bloqueo temporal del NFT denunciado.</li>
  <li>Notificación inmediata al artista afectado.</li>
  <li>Análisis y resolución.</li>
  <li>Contranotificación, si corresponde.</li>
  <li>Retirada definitiva o restauración del contenido.</li>
</ol>
<p>Este proceso cumple Art. 26 LCE y prácticas de propiedad intelectual.</p>

<h3>13. Cumplimiento con Instagram / Meta</h3>
<h4>13.1 Publicaciones del marketplace</h4>
<p>Las obras promocionadas en Instagram están sujetas a:</p>
<ul>
  <li>Instagram Community Guidelines.</li>
  <li>Instagram Terms of Use.</li>
  <li>Instagram Commerce Policies.</li>
</ul>
<p>Lo que implica:</p>
<ul>
  <li>Artereum SV solo puede usar Instagram como canal informativo, no de transacciones.</li>
  <li>Cualquier contenido reportado directamente a Instagram puede ser retirado de forma inmediata por la plataforma, sin intervención de Artereum SV.</li>
  <li>Las decisiones de Instagram no están bajo control del marketplace.</li>
</ul>

<h4>13.2 Obligaciones de compradores y artistas</h4>
<p>Ambos aceptan que:</p>
<ul>
  <li>Las interacciones en Instagram se rigen por las políticas de Meta.</li>
  <li>No deben subir contenido que infrinja derechos de autor o normas comunitarias.</li>
  <li>Instagram puede restringir, ocultar o eliminar publicaciones sin previo aviso.</li>
</ul>

<h3>14. Evidencias electrónicas</h3>
<p>Artereum SV conservará conforme al Art. 20 LCE:</p>
<ul>
  <li>Versión aceptada de los Términos y Condiciones.</li>
  <li>Hash de la transacción.</li>
  <li>Comprobante de pago.</li>
  <li>Acuse de recibo.</li>
  <li>Registro interno asociado al smart contract conceptual.</li>
</ul>

<h3>15. Protección de datos personales</h3>
<p>El tratamiento se rige por:</p>
<ul>
  <li>Política de Privacidad.</li>
  <li>Política de Tratamiento de Datos Personales.</li>
  <li>Política para Compartir Información y Consentimiento.</li>
</ul>
<p>Estas políticas se integran a estos Términos por referencia.</p>

<h3>16. Legislación aplicable</h3>
<ul>
  <li>Ley de Comercio Electrónico (LCE).</li>
  <li>Ley de Protección al Consumidor (LPC).</li>
  <li>Ley de Propiedad Intelectual (LPI).</li>
  <li>Ley de Firma Electrónica (LFE).</li>
  <li>Ley de Ciberseguridad.</li>
</ul>
`;

export const legacyProducts: MarketplaceProduct[] = [
  { id: 1, name: "Eclipse Neón", price: 50, ethPrice: 0.0151, description: "Obra digital inspirada en fenómenos cósmicos reinterpretados en estilo ciberpunk.", image: img1, author: "AetherFlux", technical: { format: "PNG", dimensions: "3500x4500 px", size: "8.2 MB", resolution: "4K" }, edition: "Única" },
  { id: 2, name: "Código Ancestral", price: 50, ethPrice: 0.0151, description: "Representación artística de un pasado mítico mezclado con códigos modernos.", image: img2, author: "NeoTotem", technical: { format: "JPG", dimensions: "3000x4200 px", size: "6.7 MB", resolution: "4K" }, edition: "Limitada (25 unidades)" },
  { id: 3, name: "Horizonte Virtual", price: 50, ethPrice: 0.0151, description: "Paisaje virtual que fusiona arquitectura futurista con elementos minimalistas.", image: img3, author: "LumenEdge", technical: { format: "PNG", dimensions: "4096x4096 px", size: "9.1 MB", resolution: "4K" }, edition: "Múltiple (100 unidades)" },
  { id: 4, name: "Luz de la Memoria", price: 50, ethPrice: 0.0151, description: "Pieza emocional que explora la luz, el recuerdo y la abstracción digital.", image: img4, author: "AstraMira", technical: { format: "PNG", dimensions: "3600x4800 px", size: "7.4 MB", resolution: "4K" }, edition: "Única" },
  { id: 5, name: "Ciudad Holográfica", price: 60, ethPrice: 0.0181, description: "Ciudad conceptual creada a partir de elementos holográficos y energía luminosa.", image: img5, author: "PixelHaze", technical: { format: "JPG", dimensions: "4000x4000 px", size: "5.8 MB", resolution: "2K" }, edition: "Limitada (50 unidades)" },
  { id: 6, name: "Fragmentos del Tiempo", price: 60, ethPrice: 0.0181, description: "Exploración visual del tiempo como elemento fragmentado y dinámico.", image: img6, author: "ChronoWave", technical: { format: "PNG", dimensions: "3300x4500 px", size: "8.9 MB", resolution: "4K" }, edition: "Única" },
  { id: 7, name: "Flor Cuántica", price: 70, ethPrice: 0.0211, description: "Flor digital formada por energía cuántica y partículas sintéticas.", image: img7, author: "QuantumBloom", technical: { format: "PNG", dimensions: "4500x4500 px", size: "10.1 MB", resolution: "4K" }, edition: "Limitada (10 unidades)" },
  { id: 8, name: "Vórtice Dorado", price: 70, ethPrice: 0.0211, description: "Vórtice brillante que simboliza transformación y transición energética.", image: img8, author: "NovaDrift", technical: { format: "JPG", dimensions: "3800x4200 px", size: "6.2 MB", resolution: "2K" }, edition: "Múltiple (80 unidades)" },
  { id: 9, name: "Neblina Digital", price: 80, ethPrice: 0.0242, description: "Ambiente digital atmosférico construido con neblina y geometría minimal.", image: img9, author: "MistCoder", technical: { format: "PNG", dimensions: "4096x4096 px", size: "9.4 MB", resolution: "4K" }, edition: "Única" },
  { id: 10, name: "Amanecer Sintético", price: 70, ethPrice: 0.0211, description: "Reinterpretación de un amanecer usando lenguaje visual sintético.", image: img10, author: "SolarBit", technical: { format: "PNG", dimensions: "3600x3600 px", size: "7.1 MB", resolution: "4K" }, edition: "Limitada (20 unidades)" },
  { id: 11, name: "Tormenta de Datos", price: 95, ethPrice: 0.0287, description: "Tormenta dinámica hecha de datos y estructuras tecnológicas.", image: img11, author: "DataStormer", technical: { format: "JPG", dimensions: "4200x3500 px", size: "6.9 MB", resolution: "2K" }, edition: "Múltiple (120 unidades)" },
  { id: 12, name: "Ritual Binario", price: 55, ethPrice: 0.0166, description: "Representación ritualista que mezcla código, misterio y luz.", image: img12, author: "HexPriest", technical: { format: "PNG", dimensions: "3500x4500 px", size: "7.9 MB", resolution: "4K" }, edition: "Única" },
  { id: 13, name: "Camino Lúcido", price: 50, ethPrice: 0.0151, description: "Viaje onírico plasmado en un camino luminoso y surreal.", image: img13, author: "DreamSync", technical: { format: "PNG", dimensions: "4096x4096 px", size: "8.4 MB", resolution: "4K" }, edition: "Limitada (15 unidades)" },
  { id: 14, name: "Reflejo Fractal", price: 110, ethPrice: 0.0332, description: "Diseño fractal hipnótico con reflejos infinitos.", image: img14, author: "FractalMind", technical: { format: "PNG", dimensions: "5000x5000 px", size: "12.2 MB", resolution: "5K" }, edition: "Única" },
  { id: 15, name: "Aurora del Pixel", price: 50, ethPrice: 0.0151, description: "Aurora digital vibrante construida con patrones pixelados.", image: img15, author: "PixelAura", technical: { format: "JPG", dimensions: "3800x4000 px", size: "5.5 MB", resolution: "2K" }, edition: "Múltiple (100 unidades)" },
];
