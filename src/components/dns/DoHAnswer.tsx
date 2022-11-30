import { For } from "solid-js";
import { Box, Heading } from "@hope-ui/core";
import { Record } from "./Records";

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

export function DoHAnswer(props: {
  resolver: string;
  records: Record[] | undefined;
}) {
  return (
    <Box display="flex" flexGrow="1" flexDirection="column" m={2}>
      {props.records && (
        <>
          <Heading>{props.resolver}</Heading>
          <For each={props.records} fallback={<div>Loading...</div>}>
            {(record, index) => (
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
                    {record.name}
                  </Box>
                </Box>
                <For each={record.records}>
                  {(answer) => (
                    <Record
                      type={answer.type}
                      value={answer.value}
                      ttl={answer.ttl}
                    ></Record>
                  )}
                </For>
              </Box>
            )}
          </For>
        </>
      )}
    </Box>
  );
}
