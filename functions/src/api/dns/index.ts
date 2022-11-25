import dns = require("node:dns");
import { Request, Response } from "express";

export type DNSRecords = {
  ns?: string[];
  ipv4?: dns.RecordWithTtl[];
  ipv6?: dns.RecordWithTtl[];
  cname?: string[];
  caa?: dns.CaaRecord[];
  mx?: dns.MxRecord[];
  txt?: string[][];
};

async function _resolveNs(name: string) {
  try {
    const answer = await dns.promises.resolveNs(name);
    return { ns: answer };
  } catch (e) {
    console.error(e);
    return { ns: null };
  }
}

async function _resolve4(name: string) {
  try {
    const answer = await dns.promises.resolve4(name, { ttl: true });
    return { ipv4: answer };
  } catch (e) {
    console.error(e);
    return { ipv4: null };
  }
}

async function _resolve6(name: string) {
  try {
    const answer = await dns.promises.resolve6(name, { ttl: true });
    return { ipv6: answer };
  } catch (e) {
    console.error(e);
    return { ipv6: null };
  }
}

async function _resolveCname(name: string) {
  try {
    const answer = await dns.promises.resolveCname(name);
    return { cname: answer };
  } catch (e) {
    console.error(e);
    return { cname: null };
  }
}

async function _resolveCaa(name: string) {
  try {
    const answer = await dns.promises.resolveCaa(name);
    return { caa: answer };
  } catch (e) {
    console.error(e);
    return { caa: null };
  }
}

async function _resolveMx(name: string) {
  try {
    const answer = await dns.promises.resolveMx(name);
    return { mx: answer };
  } catch (e) {
    console.error(e);
    return { mx: null };
  }
}

async function _resolveTxt(name: string) {
  try {
    const answer = await dns.promises.resolveTxt(name);
    return { txt: answer };
  } catch (e) {
    console.error(e);
    return { txt: null };
  }
}

async function resolveAll(name: string, nsIPs: dns.RecordWithTtl[]) {
  dns.promises.setServers(nsIPs.map((ip) => ip.address));

  const records = await Promise.all([
    _resolve4(name),
    _resolve6(name),
    _resolveCname(name),
    _resolveCaa(name),
    _resolveMx(name),
    _resolveTxt(name),
  ]);

  dns.promises.setServers(["1.1.1.1"]);

  return records.reduce((a: DNSRecords, c) => {
    const key = Object.keys(c)[0];
    a[key as keyof DNSRecords] = c[key as keyof typeof c];
    return a;
  }, {});
}

export async function resolveAuthoritative(name: string) {
  let { ns } = await _resolveNs(name);
  let apex = name;

  while (!ns && apex.indexOf(".") > -1) {
    apex = apex.slice(apex.indexOf(".") + 1);
    ({ ns } = await _resolveNs(apex));
  }

  if (!ns) return;

  let records = [];

  for await (let nsName of ns) {
    const { ipv4: nsIPs } = await _resolve4(nsName);

    if (!nsIPs) {
      return { ns: nsName, nsIPs };
    }

    const nsRecords = await resolveAll(name, nsIPs);
    records.push({ ns: nsName, ips: nsIPs, records: nsRecords });
  }

  return records;
}

export async function dnsQuery(req: Request, res: Response) {
  const { name }: { name?: string } = req.query;

  if (!name) {
    return res
      .status(422)
      .json({ message: "query parameter 'name' must be provided" });
  }

  const answer = await resolveAuthoritative(name);
  return res.status(200).json(answer);
}
