import Hero from "../features/HomeFeature/Hero";
import MainLayout from "../MainLayout";
import ServiceGrid from "../features/HomeFeature/ServiceGrid";
import Offer from "../features/HomeFeature/Offers";
import Features from "../features/HomeFeature/Features";
import TrustedCompany from "../components/layout/TrustedCompany";

function HomePage() {
  document.title = "Home page";

  return (
    <MainLayout>
      <Hero />
      <ServiceGrid />
      <Offer />
      <Features />
      <TrustedCompany />
    </MainLayout>
  );
}

export default HomePage;
