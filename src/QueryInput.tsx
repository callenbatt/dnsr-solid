import { Box, FormControlLabel, IconButton, Input } from "@hope-ui/core";
import { createSignal, createResource } from "solid-js";
import { SearchIcon } from "./assets/icons/SearchIcon";

export function QueryInput(props: {
  handleHostname: (hostname: string) => void;
}) {
  let hostnameInput: HTMLInputElement | undefined;

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
          onClick={(e) =>
            hostnameInput && props.handleHostname(hostnameInput.value)
          }
        >
          <SearchIcon />
        </IconButton>
      </Box>
    </>
  );
}
