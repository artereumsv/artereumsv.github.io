import CatalogPage from "./pages/CatalogPage";
import LegacyHomePage from "./pages/LegacyHomePage";
import HomePage from "./pages/HomePage";

function normalizePathname(pathname: string) {
  const normalized = pathname.replace(/\/+$/, "");
  return normalized === "" ? "/" : normalized;
}

export default function App() {
  const pathname = normalizePathname(window.location.pathname);

  if (pathname === "/catalog") {
    return <CatalogPage />;
  }

  if (pathname === "/legacy") {
    return <LegacyHomePage />;
  }

  return <HomePage />;
}
