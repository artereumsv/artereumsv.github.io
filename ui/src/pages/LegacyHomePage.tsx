import MarketplacePage from "./MarketplacePage";
import { legacyProducts } from "./marketplaceContent";

export default function LegacyHomePage() {
  return <MarketplacePage products={legacyProducts} />;
}
