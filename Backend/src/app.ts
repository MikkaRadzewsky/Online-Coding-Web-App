import express from "express";
import cors from "cors";
import appConfig from "./2-utils/app-config";
import catchAll from "./3-middleware/catch-all";
import routeNotFound from "./3-middleware/route-not-found";
import controller from "./6-controllers/controller";
// import cookieParser from "cookie-parser";

const server = express();

server.use(cors());
server.use(express.json());
server.use("/api", controller);
server.use("*", routeNotFound);
server.use(catchAll);
// server.use(cookieParser());

// add user roles through cookies

server.listen(appConfig.port, () =>
  console.log(`Listening on http://localhost:${appConfig.port}`)
);
