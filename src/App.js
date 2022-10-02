import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

// pages
import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Tasks from "./pages/Tasks";
import Signin from "./components/Signin";
import ManageFloor from "./pages/ManageFloor";
import ManageWard from "./pages/ManageWard";
import ManageBed from "./pages/ManageBed";
import ManageAction from "./pages/ManageAction";
import AuditLog from "./pages/AuditLog";
import ActivityReport from "./pages/ActivityReport";
import Setting from "./pages/Setting";

const App = () => {
  return (
    <Layout>
      <Container fluid>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/tasks" element={<Tasks />} /> 
          <Route path="/signin" element={<Signin />} />
          <Route path="/managefloor" element={<ManageFloor />} />
          <Route path="/manageward" element={<ManageWard />} />
          <Route path="/managebed" element={<ManageBed />} />
          <Route path="/manageaction" element={<ManageAction />} />
          <Route path="/auditlog" element={<AuditLog />} />
          <Route path="/activityreport" element={<ActivityReport />} />
          <Route path="/setting" element={<Setting />} />
          <Route element={<NotFound />} />
        </Routes>
      </Container>
    </Layout>
  );
};

export default App;
