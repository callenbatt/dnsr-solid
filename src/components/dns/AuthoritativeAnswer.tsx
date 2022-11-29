import { For } from "solid-js";
import { Box } from "@hope-ui/core";

import { RecordWithTtl } from "node:dns";
import { DNSRecords } from "../../../functions/src/api/dns";
import { CAA, CNAME, IPV4, IPV6, MX, TXT } from "./Records";

type NameserverAnswer = {
  ns: string;
  ips: RecordWithTtl[];
  records: DNSRecords;
};

export function AuthoritativeAnswer(props: {
  authoritativeAnswer: NameserverAnswer[] | undefined;
}) {
  return (
    <Box display="flex" flexGrow="1" flexDirection="column">
      {props.authoritativeAnswer && (
        <For each={props.authoritativeAnswer} fallback={<div>Loading...</div>}>
          {(answer, index) => (
            <Box
              display="flex"
              flexDirection="column"
              w="full"
              borderStyle="solid"
              borderWidth="thin"
              rounded="md"
              marginBottom="4"
              py={1}
              _dark={{
                borderColor: "neutral.300",
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                px={2}
                py={1}
              >
                <Box
                  as="span"
                  fontSize="base"
                  lineHeight={6}
                  fontWeight="semibold"
                  _dark={{ color: "neutral.300" }}
                >
                  {answer.ns}
                </Box>
                <Box
                  display="flex"
                  px={2}
                  py={1}
                  alignItems="center"
                  bgColor="primary.50"
                  color="primary.800"
                  rounded="full"
                  _dark={{
                    bgColor: "primary.900",
                    color: "primary.300",
                  }}
                >
                  <Box
                    as="span"
                    fontSize="xs"
                    lineHeight="none"
                    fontWeight="semibold"
                    textTransform="uppercase"
                  >
                    {answer.ips.map((ip) => ip.address).join(", ")}
                  </Box>
                </Box>
              </Box>
              {answer.records.ipv4 && <IPV4 value={answer.records.ipv4}></IPV4>}
              {answer.records.ipv6 && <IPV6 value={answer.records.ipv6}></IPV6>}
              {answer.records.cname && (
                <CNAME value={answer.records.cname}></CNAME>
              )}
              {answer.records.caa && <CAA value={answer.records.caa}></CAA>}
              {answer.records.mx && <MX value={answer.records.mx}></MX>}
              {answer.records.txt && <TXT value={answer.records.txt}></TXT>}
            </Box>
          )}
        </For>
      )}
    </Box>
  );
}
