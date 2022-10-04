import Header from './Header';
import Footer from './Footer';
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between bg-th-background">
      <Header />
      <main className="container m-auto px-4 my-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
