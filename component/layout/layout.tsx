import Header from "../header/header";
import Footer from "../footer/footer";

const layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default layout;
