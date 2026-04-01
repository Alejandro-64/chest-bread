import { Helmet } from "react-helmet-async";

const Seo = ({ title, description }) => {
  const BASE = "Chest-Bread";
  const fullTitle = title
    ? `${title} | ${BASE}`
    : `${BASE} | Urban Fast Food with Real Flavor`;
  const fullDesc =
    description ||
    "Order your burgers, hot dogs, and more from Chest-Bread. Fresh menu, quality ingredients, and fast delivery.";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDesc} />
      <meta
        name="keywords"
        content="fast food, hamburgers, hot dogs, fries, delivery Lima, Chest-Bread, comida rápida Peru"
      />
      <meta name="author" content="Chest-Bread" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Chest-Bread" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDesc} />
      <meta property="og:url" content="https://chest-bread.vercel.app/" />
      <meta
        property="og:image"
        content="https://chest-bread.vercel.app/og-image.jpg"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="es_PE" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDesc} />
      <meta
        name="twitter:image"
        content="https://chest-bread.vercel.app/og-image.jpg"
      />
    </Helmet>
  );
};

export default Seo;
