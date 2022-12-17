import React from "react";
import { Container } from "react-bootstrap";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from "./layout/Layout";
import MainRoutes from "./routes/MainRoutes";
import { Loader } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { useSelector } from "react-redux";

const App = () => {

  const { loader } = useSelector(state => state?.loaderReducer)

  return (
    <>
      {loader && <Loader center />}
      <Layout>
        <Container fluid>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={true}
          />
          <MainRoutes />
        </Container>
      </Layout>
    </>
  );
};

export default App;
