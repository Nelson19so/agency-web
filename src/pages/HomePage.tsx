import Hero from "../features/HomeFeature/Hero";
import MainLayout from "../MainLayout";
import ServiceGrid from "../features/HomeFeature/ServiceGrid";
import Offer from "../features/HomeFeature/Offers";

function HomePage() {
  document.title = "Home page";
  return (
    <MainLayout>
      <Hero />
      <ServiceGrid />
      <Offer />
    </MainLayout>
  );
}

export default HomePage;
