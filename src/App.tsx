import { Component, createResource, createSignal } from "solid-js";
import { QueryInput } from "./QueryInput";
import { Header } from "./Header";
// https://dns.google/resolve?

import { functions } from "./firebase";
import { httpsCallable } from "firebase/functions";

type QueryJSON = {
  Question?: string[];
  Answer?: string[];
};

const dnsTest = httpsCallable(functions, "dnstest");

const fetchQuery = async (name: string): Promise<QueryJSON> =>
  (
    await fetch(`https://cloudflare-dns.com/dns-query?name=${name}`, {
      headers: { accept: "application/dns-json" },
    })
  ).json();

const App: Component = () => {
  const [hostname, setHostname] = createSignal<string>();

  const [query] = createResource(hostname, dnsTest);

  return (
    <>
      <Header handleHostname={setHostname} />
      <div>
        <pre>{JSON.stringify(query(), null, 2)}</pre>
      </div>
    </>
  );
};

export default App;
