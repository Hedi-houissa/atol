import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import AddEtablissement from "views/admin/AddEtablissement";
import EditEtablissement from "views/admin/EditEtablissement";
import AddCompany from "views/company/AddCompany";
import ListeCompany from "views/company/ListeCompany";
// import Mypdf from "views/admin/Mypdf";

export default function Admin() {
 
  return (
    <>
    
      {/* <Sidebar /> */}
    
      <div className="relative w-full xl:w-12/12  ">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24 ">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/Ajouter_etablissement" exact component={AddEtablissement} />
            <Route path="/admin/modifier_profile" exact component={EditEtablissement} />
            <Route path="/admin/list" exact component={Tables} />
            <Route path="/admin/company/add" exact component={AddCompany}   />
            <Route path="/admin/company/list" exact component={ListeCompany}   />
            {/* <Route path="/admin/pdf" exact component={Mypdf} /> */}

            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
