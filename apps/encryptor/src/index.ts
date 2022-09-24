import dotenv from "dotenv";
dotenv.config();

import app from "./app";

const PORT = 4000;

(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}, http://localhost:${PORT}`);
  });
})();
