import * as functions from "firebase-functions";
import * as express from "express";

// import { lookup } from "./api/dns";

const app = express();
const router = express.Router();

app.use("/v1", router);

export const api = functions.https.onRequest(app);

// router.method(route, callback)
// router.get("/dns", lookup);
