import { Box, FormControlLabel, IconButton, Input } from "@hope-ui/core";
import { createSignal, createResource } from "solid-js";
import { SearchIcon } from "./assets/icons/SearchIcon";

// https://dns.google/resolve?

type QueryJSON = {
  Question?: string[];
  Answer?: string[];
};
const fetchQuery = async (name: string): Promise<QueryJSON> =>
  (
    await fetch(`https://cloudflare-dns.com/dns-query?name=${name}`, {
      headers: { accept: "application/dns-json" },
    })
  ).json();

export function QueryInput() {
  let hostnameInput: HTMLInputElement | undefined;

  const [hostname, setHostname] = createSignal<string>();

  const [query] = createResource(hostname, fetchQuery);

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        rounded="lg"
        shadow="lg"
        w="full"
        bg="white"
        _dark={{
          borderColor: "neutral.800",
          bg: "neutral.900",
        }}
      >
        <Input placeholder="hostname" ref={hostnameInput} />
        <IconButton
          aria-label="Search"
          variant="solid"
          onClick={(e) => hostnameInput && setHostname(hostnameInput.value)}
        >
          <SearchIcon />
        </IconButton>
      </Box>

      <div>
        <pre>{JSON.stringify(query(), null, 2)}</pre>
      </div>
    </>
  );
}
