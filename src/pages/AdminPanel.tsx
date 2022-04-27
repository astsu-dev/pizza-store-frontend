import adminDataProvider from "admin/dataProvider";
import React from "react";
import { Admin, EditGuesser, ListGuesser, Resource } from "react-admin";

const AdminPanel: React.FC = () => {
  return (
    <Admin basename="/admin" dataProvider={adminDataProvider} disableTelemetry>
      <Resource name="categories" list={ListGuesser} edit={EditGuesser} />
      <Resource name="products" list={ListGuesser} edit={EditGuesser} />
    </Admin>
  );
};

export default AdminPanel;
