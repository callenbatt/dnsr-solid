import * as functions from "firebase-functions";
import * as express from "express";

import { dnsQuery, resolveAuthoritative } from "./api/dns";

const app = express();
const router = express.Router();

app.use("/v1", router);

export const api = functions.https.onRequest(app);

// router.method(route, callback)
router.get("/dns", dnsQuery);

export const authoratativeQuery = functions.https.onCall(
  async (data, context) => {
    console.log(data);
    const hostname = data.hostname;
    if (!hostname) {
      return { message: "Missing valid name" };
    }
    const records = await resolveAuthoritative(hostname);
    return records;
  }
);
