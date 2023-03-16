import * as ReactDOM from "react-dom";
import * as React from "react";
import Button from "@mui/material/Button";

function App() {
  return <Button variant="contained">Hello World</Button>;
}

ReactDOM.createRoot(document.querySelector("#app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);