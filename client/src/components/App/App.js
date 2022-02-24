import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";

import CompanyDomainDetails from "../../pages/companyDomainDetails";
import Dashboard from "../../pages/dashboard";

function App() {

  return (
    <>
      <Container fluid="sm">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Dashboard />} />
              <Route path="domain" >
                <Route path=":companyDomain" element={<CompanyDomainDetails />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
