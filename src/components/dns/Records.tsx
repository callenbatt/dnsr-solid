import { Box } from "@hope-ui/core";
import { RecordWithTtl, CaaRecord, MxRecord } from "node:dns";
import { For } from "solid-js";

export function Record(props: { type: string; value: string; ttl?: number }) {
  let baseColor;
  switch (props.type) {
    case "A":
      baseColor = "primary";
      break;
    case "AAAA":
      baseColor = "info";
      break;
    case "CNAME":
      baseColor = "success";
      break;
    case "MX":
      baseColor = "warning";
      break;
    case "CAA":
      baseColor = "danger";
      break;
    case "TXT":
      baseColor = "neutral";
      break;
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      color={`${baseColor}.800`}
      _dark={{
        color: `${baseColor}.100`,
      }}
      m={1}
    >
      <Box
        display="flex"
        px={2}
        py={1}
        alignItems="center"
        bgColor={`${baseColor}.50`}
        color={`${baseColor}.800`}
        rounded="full"
        _dark={{
          bgColor: `${baseColor}.700`,
          color: `${baseColor}.50`,
        }}
      >
        <Box
          as="span"
          fontSize="xs"
          lineHeight="none"
          fontWeight="semibold"
          textTransform="uppercase"
        >
          {props.type}
        </Box>
      </Box>
      <Box as="span" px={2} fontSize="md" lineHeight="none">
        {props.value}
      </Box>
      {props.ttl && (
        <Box
          display="flex"
          px={2}
          py={1}
          alignItems="center"
          bgColor={`${baseColor}.50`}
          color={`${baseColor}.800`}
          rounded="full"
          _dark={{
            bgColor: `${baseColor}.900`,
            color: `${baseColor}.200`,
          }}
        >
          <Box
            as="span"
            fontSize="xs"
            lineHeight="none"
            fontWeight="semibold"
            textTransform="uppercase"
          >
            {props.ttl}
          </Box>
        </Box>
      )}
    </Box>
  );
}

export function IPV4(props: { value: RecordWithTtl[] }) {
  return (
    <For each={props.value}>
      {(record) => <Record type="A" value={record.address} ttl={record.ttl} />}
    </For>
  );
}

export function IPV6(props: { value: RecordWithTtl[] }) {
  return (
    <For each={props.value}>
      {(record) => (
        <Record type="AAAA" value={record.address} ttl={record.ttl} />
      )}
    </For>
  );
}

export function CNAME(props: { value: string[] }) {
  return (
    <For each={props.value}>
      {(record) => <Record type="CNAME" value={record} />}
    </For>
  );
}

export function CAA(props: { value: CaaRecord[] }) {
  return (
    <For each={props.value}>
      {(record) => (
        <Record
          type="CAA"
          value={`critical: ${record.critical} ${
            record.issue ? `; issue: ${record.issue}` : ``
          } ${record.issuewild ? `; issuewild: ${record.issuewild}` : ``}`}
        />
      )}
    </For>
  );
}

export function MX(props: { value: MxRecord[] }) {
  return (
    <For each={props.value}>
      {(record) => (
        <Record
          type="MX"
          value={`priority: ${record.priority}; exchange: ${record.exchange}`}
        />
      )}
    </For>
  );
}

export function TXT(props: { value: string[][] }) {
  return (
    <For each={props.value}>
      {(record) => <Record type="TXT" value={record.join(", ")} />}
    </For>
  );
}
