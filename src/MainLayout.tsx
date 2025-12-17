import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import NewsLetter from "./components/layout/NewsLetter";

type prop = {
  children: any;
};

function MainLayout({ children }: prop) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <NewsLetter />
      <Footer />
    </>
  );
}

export default MainLayout;
