import dotenv from "dotenv";
dotenv.config();

import app from "./app";

// eslint-disable-next-line turbo/no-undeclared-env-vars
const PORT = parseInt(process.env.PORT);

(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}, http://localhost:${PORT}`);
  });
})();
