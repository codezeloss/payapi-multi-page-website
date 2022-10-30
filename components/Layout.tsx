import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
