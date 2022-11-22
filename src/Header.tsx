import { Box, Center, Flex, Image, Text, Heading } from "@hope-ui/core";
import LogoSticker from "./assets/images/logo_sm.png";
import { QueryInput } from "./QueryInput";

export function Header(props: { handleHostname: (hostname: string) => void }) {
  return (
    <Flex marginTop={4} alignItems="center">
      <Box marginLeft={4} maxWidth={24}>
        <Image src={LogoSticker} objectFit="cover" />
      </Box>
      <Box marginLeft={4}>
        <Heading level={1} size="5xl" fontFamily="mono">
          DNSr
        </Heading>
      </Box>
      <Box marginLeft={4} width="96">
        <QueryInput handleHostname={props.handleHostname} />
      </Box>
    </Flex>
  );
}
