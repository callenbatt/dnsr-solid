import { For, Resource } from "solid-js";
import { Box, Flex, Image, Text, Heading } from "@hope-ui/core";

import { RecordWithTtl } from "node:dns";
import { DNSRecords } from "../functions/src/api/dns";

type NameserverAnswer = {
  ns: string;
  ips: RecordWithTtl[];
  records: DNSRecords;
};

export function AuthoritativeAnswer(props: {
  authoritativeAnswer: NameserverAnswer[] | undefined;
}) {
  return (
    <Box>
      {props.authoritativeAnswer && (
        <For each={props.authoritativeAnswer} fallback={<div>Loading...</div>}>
          {(item, index) => (
            <div>
              #{index()} <pre>{JSON.stringify(item, null, 2)}</pre>
            </div>
          )}
        </For>
      )}
    </Box>
  );
}
