import { App, Empty } from "antd";
import { useEffect, useState } from "react";
import { artworksApi, type Artwork } from "../lib/artworksApi";
import MarketplacePage from "./MarketplacePage";
import type { MarketplaceProduct } from "./marketplaceContent";

function toEditionLabel(artwork: Artwork) {
  if (artwork.editionTotal <= 1) {
    return artwork.editionType;
  }

  return `${artwork.editionType} (${artwork.editionTotal} unidades)`;
}

function mapArtworkToProduct(artwork: Artwork): MarketplaceProduct {
  return {
    id: artwork.id,
    name: artwork.title,
    price: artwork.usdPrice,
    ethPrice: artwork.ethPrice,
    description: artwork.description,
    image: artwork.coverImageUrl,
    author: artwork.authorName,
    technical: {
      format: artwork.format,
      dimensions: artwork.dimensions,
      size: artwork.fileSize,
      resolution: artwork.resolution,
    },
    edition: toEditionLabel(artwork),
  };
}

export default function HomePage() {
  const { message } = App.useApp();
  const [products, setProducts] = useState<MarketplaceProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);

      try {
        const artworks = await artworksApi.getAll();
        setProducts(artworks.map(mapArtworkToProduct));
      } catch (error) {
        const description = error instanceof Error ? error.message : "No se pudo cargar el catálogo.";
        message.error(description);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    void load();
  }, [message]);

  if (!loading && products.length === 0) {
    return (
      <div style={{ minHeight: "100vh", background: "#0d0d0d", display: "grid", placeItems: "center", padding: 24 }}>
        <Empty
          description={<span style={{ color: "#bfbfbf" }}>No hay artworks disponibles en la base de datos.</span>}
        />
      </div>
    );
  }

  return <MarketplacePage products={products} loading={loading} />;
}
