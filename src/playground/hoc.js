// Higher Order Component (HOC) - A component that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from "react";
import { createRoot } from "react-dom/client";

const Info = (props) => {
  return (
    <div>
      <h1>Info</h1>
      <p> The info is: {props.info} </p>
    </div>
  );
};

//regular function - not react component
// returns HOC
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please sign in to see information.</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//Render to Page
const container = document.getElementById("app");
const root = createRoot(container);
// root.render(<AdminInfo isAdmin={true} info="placeholder info" />);
root.render(<AuthInfo isAuthenticated={true} info="placeholder info" />);
