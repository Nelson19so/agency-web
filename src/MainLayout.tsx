import Navbar from "./components/layout/Navbar";

type prop = {
  children: any;
};

function MainLayout({ children }: prop) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}

export default MainLayout;
