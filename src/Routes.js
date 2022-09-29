import React from "react";
import EditProfile from "pages/EditProfile";
import SecurityPolicy from "pages/SecurityPolicy";
import SignUp from "pages/SignUp";
import AdvancedSearch from "pages/AdvancedSearch";
import SignupLoginModule from "pages/SignupLoginModule";
import TermsAndConditions from "pages/TermsAndConditions";
import AccountCreation from "pages/AccountCreation";
import NavigationMenu from "pages/NavigationMenu";
import AppointmentManagement from "pages/AppointmentManagement";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/appointmentmanagement"
          element={<AppointmentManagement />}
        />
        <Route path="/navigationmenu" element={<NavigationMenu />} />
        <Route path="/accountcreation" element={<AccountCreation />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/signuploginmodule" element={<SignupLoginModule />} />
        <Route path="/advancedsearch" element={<AdvancedSearch />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/securitypolicy" element={<SecurityPolicy />} />
        <Route path="/editprofile" element={<EditProfile />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
