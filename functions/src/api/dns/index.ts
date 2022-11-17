import dns = require("node:dns");

const NAME = "www.finalsite.com";

type DNSRecords = {
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
    return { ns: null };
  }
}

async function _resolve4(name: string) {
  try {
    const answer = await dns.promises.resolve4(name, { ttl: true });
    return { ipv4: answer };
  } catch (e) {
    return { ipv4: null };
  }
}

async function _resolve6(name: string) {
  try {
    const answer = await dns.promises.resolve6(name, { ttl: true });
    return { ipv6: answer };
  } catch (e) {
    return { ipv6: null };
  }
}

async function _resolveCname(name: string) {
  try {
    const answer = await dns.promises.resolveCname(name);
    return { cname: answer };
  } catch (e) {
    return { cname: null };
  }
}

async function _resolveCaa(name: string) {
  try {
    const answer = await dns.promises.resolveCaa(name);
    return { caa: answer };
  } catch (e) {
    return { caa: null };
  }
}

async function _resolveMx(name: string) {
  try {
    const answer = await dns.promises.resolveMx(name);
    return { mx: answer };
  } catch (e) {
    return { mx: null };
  }
}

async function _resolveTxt(name: string) {
  try {
    const answer = await dns.promises.resolveTxt(name);
    return { txt: answer };
  } catch (e) {
    return { txt: null };
  }
}

async function run(name: string) {
  let { ns } = await _resolveNs(name);
  let apex = name;

  while (!ns && apex.indexOf(".") > -1) {
    apex = apex.slice(apex.indexOf(".") + 1);
    ({ ns } = await _resolveNs(apex));
  }

  if (!ns) return;

  return await Promise.all(
    ns.map(async (nsName) => {
      const { ipv4: nsIPs } = await _resolve4(nsName);

      if (!nsIPs) {
        return { ns: nsName, nsIPs };
      }

      dns.promises.setServers(nsIPs.map((ip) => ip.address));

      const nsRecords = (
        await Promise.all([
          _resolve4(name),
          _resolve6(name),
          _resolveCname(name),
          _resolveCaa(name),
          _resolveMx(name),
          _resolveTxt(name),
        ])
      ).reduce((a: DNSRecords, c) => {
        const key = Object.keys(c)[0];
        a[key as keyof DNSRecords] = c[key as keyof typeof c];
        return a;
      }, {});

      return { ns: nsName, ips: nsIPs, records: nsRecords };
    })
  );
}

async function test() {
  const results = await run(NAME);
  console.log(results);
}

test();
