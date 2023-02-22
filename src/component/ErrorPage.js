import Header from "./Header";
import Footer from "./Footer";

function ErrorPage() {
  return (
    <>
      <Header />

      <h1 style={{ marginTop: "50px", marginBottom: "150px" }}>
        Page Not Found (404)
      </h1>

      <Footer />
    </>
  );
}

export default ErrorPage;
