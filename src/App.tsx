import { Component, createResource, createSignal } from "solid-js";
// import { QueryInput } from "./QueryInput";
import { Header } from "./Header";
import { AuthoritativeAnswer } from "./components/dns/AuthoritativeAnswer";
import { RecordWithTtl } from "node:dns";
import { DNSRecords } from "../functions/src/api/dns";
import { functions } from "./firebase";
import { httpsCallable } from "firebase/functions";
import { Flex, Box } from "@hope-ui/core";
import { DoHAnswer } from "./components/dns/DoHAnswer";

type QueryJSON = {
  Question?: string[];
  Answer?: string[];
};

type NameserverAnswer = {
  ns: string;
  ips: RecordWithTtl[];
  records: DNSRecords;
};

type Answer = {
  name: string;
  type: number;
  TTL: number;
  data: string;
};

const DNSTypeValues = {
  1: "A",
  5: "CNAME",
  15: "MX",
  16: "TXT",
  28: "AAAA",
  257: "CAA",
};

type Record = {
  name: string;
  records: [
    {
      type: string;
      value: string;
      ttl: number;
    }
  ];
};

// const dnsTest: HttpsCallableResult = httpsCallable(functions, "dnstest");

const callAuthoratativeQuery = async (hostname: string) => {
  const authoratativeQuery = httpsCallable<
    { hostname: string },
    NameserverAnswer[]
  >(functions, "authoratativeQuery");
  const { data } = await authoratativeQuery({
    hostname,
  });
  return data;
};

const callCloudflareQuery = async (hostname: string) => {
  const res = await fetch(
    `https://cloudflare-dns.com/dns-query?name=${hostname}`,
    {
      headers: { accept: "application/dns-json" },
    }
  );
  return await res.json();
};

const callGoogleQuery = async (hostname: string) => {
  const dnsTypes = Object.keys(DNSTypeValues);
  const responses = await Promise.all(
    dnsTypes.map(async (type) => {
      const response = await fetch(
        `https://dns.google/resolve?name=${hostname}&type=${type}`
      );
      return await response.json();
    })
  );

  let records: Record[] = [];

  responses.forEach((response) => {
    if (!response.Answer) return;

    response.Answer.forEach((answer: Answer) => {
      const data = {
        type: DNSTypeValues[answer.type as keyof typeof DNSTypeValues],
        value: answer.data,
        ttl: answer.TTL,
      };
      const record = records.find((r) => {
        return answer.name === r.name;
      });

      if (!record) {
        records.push({
          name: answer.name,
          records: [data],
        });
      } else {
        const exists = record.records.find((i) => {
          return i.type === data.type && i.value === data.value;
        });
        if (!exists) {
          record.records.push(data);
        }
      }
    });
  });
  return records;
};

const App: Component = () => {
  const [hostname, setHostname] = createSignal<string>();

  const [authoritativeAnswer] = createResource(
    hostname,
    callAuthoratativeQuery
  );

  const [cloudflareAnswer] = createResource(hostname, callCloudflareQuery);

  const [googleAnswer] = createResource(hostname, callGoogleQuery);
  return (
    <>
      <Header handleHostname={setHostname} />
      <Flex w="fit-content" justifyContent="center">
        <AuthoritativeAnswer authoritativeAnswer={authoritativeAnswer()} />
        <DoHAnswer records={googleAnswer()} />
        <Box flexGrow="1">
          <pre>{JSON.stringify(cloudflareAnswer(), null, 2)}</pre>
        </Box>
      </Flex>
    </>
  );
};

export default App;
