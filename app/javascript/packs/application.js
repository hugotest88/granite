import "../stylesheets/application.scss";

const { setAuthHeaders } = require("apis/axios");
const { initializeLogger } = require("common/logger");

initializeLogger();
setAuthHeaders();
