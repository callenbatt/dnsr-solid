import * as functions from "firebase-functions";
import * as express from "express";

import { dnsQuery } from "./api/dns";

const app = express();
const router = express.Router();

app.use("/v1", router);

export const api = functions.https.onRequest(app);

// router.method(route, callback)
router.get("/dns", dnsQuery);

export const dnstest = functions.https.onCall((data, context) => {
  console.log("hello");
  return { message: "hello" };
});
