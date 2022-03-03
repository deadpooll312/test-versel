import Footer from 'components/Footer';

const LayoutAuth = ({ children }) => (
  <div className="container-fluid py-5">
    <div className="row">
      <main role="main" className="content ml-sm-auto col-md-9 col-lg-10 pb-3">
        {children}
        <Footer />
      </main>
    </div>
  </div>
);

export default LayoutAuth;
