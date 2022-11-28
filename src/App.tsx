import { Component, createResource, createSignal } from "solid-js";
// import { QueryInput } from "./QueryInput";
import { Header } from "./Header";
import { AuthoritativeAnswer } from "./components/dns/AuthoritativeAnswer";
import { RecordWithTtl } from "node:dns";
import { DNSRecords } from "../functions/src/api/dns";
import { functions } from "./firebase";
import { httpsCallable } from "firebase/functions";
import { Flex, Box } from "@hope-ui/core";
import { Record } from "./components/dns/Records";
type QueryJSON = {
  Question?: string[];
  Answer?: string[];
};

type NameserverAnswer = {
  ns: string;
  ips: RecordWithTtl[];
  records: DNSRecords;
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
  const res = await fetch(`https://dns.google/resolve?name=${hostname}`);
  return await res.json();
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
      <Flex width="fit-content" justifyContent="center">
        <AuthoritativeAnswer authoritativeAnswer={authoritativeAnswer()} />
      </Flex>
    </>
  );
};

export default App;
