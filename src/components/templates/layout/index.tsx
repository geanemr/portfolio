
import Menu from "../../molecules/navbar";
import Contacts from "../../organisms/contacts";
import Footer from "../../organisms/footer";

const Layout = () => {
  return (
    <div className="bg-charcoal">
      <Menu />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Layout;
