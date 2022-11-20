import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
// Layout
import Layout from "./layout/Layout";

import MainRoutes from "./routes/MainRoutes";

const App = () => {

  const user = localStorage.getItem('user');

  return (
    <Layout>
      <Container fluid>
        <MainRoutes />
      </Container>
    </Layout>
  );
};

export default App;
