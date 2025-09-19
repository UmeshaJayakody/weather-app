import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

const domain = "dev-bgvdo8o6mkr5zptw.us.auth0.com";
const clientId = "aFKVqkR8Zi2BBxNSxbrjk1Hb4tbOrKC7";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <App />
  </Auth0Provider>
);
