import "../stylesheets/application.scss";
import ReactRailsUJS from "react_ujs";
import App from "../src/App";

const { setAuthHeaders } = require("apis/axios");
const { initializeLogger } = require("common/logger");

initializeLogger();
setAuthHeaders();

const componentsContext = { App };
ReactRailsUJS.getConstructor = (name) => {
  return componentsContext[name];
};
