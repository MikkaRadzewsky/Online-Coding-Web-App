import express from "express";
import cors from "cors";
import appConfig from "./2-utils/app-config";
import catchAll from "./3-middleware/catch-all";
import routeNotFound from "./3-middleware/route-not-found";
import controller from "./6-controllers/controller";
// import cookieParser from "cookie-parser";
import path from "path";

const server = express();

server.use(cors());
server.use(express.json());
server.use("/api", controller);
// server.use("*", routeNotFound);
server.use(catchAll);
const REACT_BUILD_FOLDER = "../../Frontend/build";

server.use(express.static(path.resolve(__dirname, REACT_BUILD_FOLDER)));

// server.use(cookieParser());

// add user roles through cookies

server.listen(appConfig.port, () =>
  console.log(`Listening on http://localhost:${appConfig.port}`)
);

server.get("*", (req, res) => {
  // Any non react endpoint will reach here
  res.sendFile(path.resolve(__dirname, REACT_BUILD_FOLDER, "index.html"));
});
