const dns = require("dns");
const dnsPromises = dns.promises;

async function dnsQuery(name, query) {
  try {
    let answer;
    if (query === "resolve4" || query === "resolve6") {
      answer = await dnsPromises[query](name, { ttl: true });
    } else {
      answer = await dnsPromises[query](name);
    }
    return answer;
  } catch (e) {
    return;
  }
}

async function getNameserver(name) {
  try {
    return await dnsPromises.resolveNs(name);
  } catch (e) {
    return;
  }
}

async function resolveAll(name, nameserver) {
  try {
    let result = {
      ns_name: nameserver,
    };
    // we need the ips of the naeservers to query
    result.ns_ips = await dnsQuery(nameserver, "resolve4");

    // retuern if we don't have an array of nameserver ips
    if (!result.ns_ips.length) {
      return;
    }

    nameserver_ips = result.ns_ips.map((nameserver) => nameserver.address);

    // set the server to query to the nameserver ips
    dnsPromises.setServers(nameserver_ips);

    // we want to run a set of queries
    const queries = [
      "resolve4",
      "resolve6",
      "resolveCname",
      "resolveCaa",
      "resolveMx",
      "resolveTxt",
    ];

    const answers = await Promise.all(
      queries.map(async (query) => {
        const dig = await dnsQuery(name, query);
        return { query, dig };
      })
    );

    answers.forEach((answer) => {
      result[answer.query] = answer.dig.length ? answer.dig : null;
    });
    return result;
  } catch (e) {
    console.log(e);
    return;
  }
}

async function testa() {
  const name = "www.nbbroncos.net";

  // get nameservers
  let nameservers = await getNameserver(name);
  let apex = name;

  // move along the name to get the apex
  while (!nameservers && apex.indexOf(".") > -1) {
    apex = apex.slice(apex.indexOf(".") + 1);
    nameservers = await getNameserver(apex);
  }

  // we want to run dns queries on each of the nameservers
  const results = await Promise.all(
    nameservers.map(async (nameserver) => {
      return await resolveAll(name, nameserver);
    })
  );

  console.log(results);
}

async function test() {
  dns.setServers(["8.8.8.8"]);
  dns.resolveCaa("www.finalsite.com", (err, ret) => {
    console.log(ret);
  });
}

testa();

const structure = [
  {
    ns_name: "ns.example.com",
    ns_ip: "123.123.123.123",
    dig: {
      ipv4: {
        ttl: 600,
        answer: ["123.123.123.123", "123.123.123.123"],
      },
      ipv6: {
        ttl: 600,
        answer: ["123.123.123.123", "123.123.123.123"],
      },
      cname: {
        name: "example.com",
      },
    },
  },
];
