import { Request, Response } from "express";
import dns = require("node:dns");
const dnsPromises = dns.promises;

// interface RequestQuery {
//   foo: string;
// }

export async function lookup(req: Request, res: Response) {
  const name = req.query.name as string;
  // const type = req.query.type || 1;

  if (!name) {
    return res
      .status(400)
      .json({ message: "Missing required 'name' parameter" });
  }

  // const getServers = await dnsPromises.getServers();
  // const resolve = await dnsPromises.resolve(name);
  const resolve4 = await dnsPromises.resolve4(name);
  const resolve6 = await dnsPromises.resolve6(name);
  const resolveAny = await dnsPromises.resolveAny(name);
  // const resolveCaa = await dnsPromises.resolveCaa(name);
  const resolveCname = await dnsPromises.resolveCname(name);
  // const resolveMx = await dnsPromises.resolveMx(name);
  // const resolveNaptr = await dnsPromises.resolveNaptr(name);
  // const resolveNs = await dnsPromises.resolveNs(name);
  // const resolvePtr = await dnsPromises.resolvePtr(name);
  // const resolveSoa = await dnsPromises.resolveSoa(name);
  // const resolveSrv = await dnsPromises.resolveSrv(name);
  // const resolveTxt = await dnsPromises.resolveTxt(name);
  // const reverse = await dnsPromises.reverse(name);

  return res.status(200).json({
    // getServers,
    // resolve,
    resolve4,
    resolve6,
    resolveAny,
    // resolveCaa,
    resolveCname,
    // resolveMx,
    // resolveNaptr,
    // resolveNs,
    // resolvePtr,
    // resolveSoa,
    // resolveSrv,
    // resolveTxt,
    // reverse,
  });
}

export async function test() {
  const name = "www.finalsite.com";

  // const getServers = await dnsPromises.getServers();
  // const resolve = await dnsPromises.resolve(name);
  const resolve4 = await dnsPromises.resolve4(name);
  const resolve6 = await dnsPromises.resolve6(name);
  const resolveAny = await dnsPromises.resolveAny(name);
  // const resolveCaa = await dnsPromises.resolveCaa(name);
  const resolveCname = await dnsPromises.resolveCname(name);
  // const resolveMx = await dnsPromises.resolveMx(name);
  // const resolveNaptr = await dnsPromises.resolveNaptr(name);
  // const resolveNs = await dnsPromises.resolveNs(name);
  // const resolvePtr = await dnsPromises.resolvePtr(name);
  // const resolveSoa = await dnsPromises.resolveSoa(name);
  // const resolveSrv = await dnsPromises.resolveSrv(name);
  // const resolveTxt = await dnsPromises.resolveTxt(name);
  // const reverse = await dnsPromises.reverse(name);

  return {
    // getServers,
    // resolve,
    resolve4,
    resolve6,
    resolveAny,
    // resolveCaa,
    resolveCname,
    // resolveMx,
    // resolveNaptr,
    // resolveNs,
    // resolvePtr,
    // resolveSoa,
    // resolveSrv,
    // resolveTxt,
    // reverse,
  };
}

console.log(test());
