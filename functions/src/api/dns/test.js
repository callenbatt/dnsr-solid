const dns = require("dns");
const dnsPromises = dns.promises;

async function getNameserver(name) {
  try {
    return await dnsPromises.resolveNs(name);
  } catch (e) {
    return;
  }
}

async function resolve4ByNameserver(name, nameserver) {
  try {
    const nsips = await dnsPromises.resolve4(nameserver);
    dnsPromises.setServers(nsips);
    const ip = await dnsPromises.resolveCname(name);
    return { nameserver, nsips, ip };
  } catch (e) {
    return;
  }
}

async function test() {
  const name = "www.oldham.kyschools.us";

  // get nameservers
  let nameServers = await getNameserver(name);
  let apex = name;
  while (!nameServers && apex.indexOf(".") > -1) {
    apex = apex.slice(apex.indexOf(".") + 1);
    nameServers = await getNameserver(apex);
  }

  const result = await Promise.all(
    nameServers.map(async (ns) => await resolve4ByNameserver(name, ns))
  );
  console.log(result);
  // dnsPromises.setServers(["8.8.8.8"]);
  // const getServers = await dnsPromises.getServers();
  // const resolve = await dnsPromises.resolve(name);
  // const resolve4 = await dnsPromises.resolve4(name, { ttl: true });
  // const resolve6 = await dnsPromises.resolve6(name, { ttl: true });
  // const resolveAny = await dnsPromises.resolveAny(name);
  // const resolveCaa = await dnsPromises.resolveCaa(name);
  // const resolveCname = await dnsPromises.resolveCname(name);
  // const resolveMx = await dnsPromises.resolveMx(name);
  // const resolveNaptr = await dnsPromises.resolveNaptr(name);
  // const resolveNs = await dnsPromises.resolveNs(name);
  // const resolvePtr = await dnsPromises.resolvePtr(name);
  // const resolveSoa = await dnsPromises.resolveSoa(name);
  // const resolveSrv = await dnsPromises.resolveSrv(name);
  // const resolveTxt = await dnsPromises.resolveTxt(name);
  // const reverse = await dnsPromises.reverse(name);

  // const result = {
  // getServers,
  // resolve,
  // resolve4,
  // resolve6,
  // resolveAny,
  // resolveCaa,
  // resolveCname,
  // resolveMx,
  // resolveNaptr,
  // resolveNs,
  // resolvePtr,
  // resolveSoa,
  // resolveSrv,
  // resolveTxt,
  // reverse,
  // };

  // console.log(result);
}

test();
