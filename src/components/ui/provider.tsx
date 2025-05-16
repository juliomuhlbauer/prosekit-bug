"use client";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

const customConfig = defineConfig({
  globalCss: {
    "*": {
      scrollbarColor: "var(--chakra-colors-gray-900) transparent",
    },
    "body, html, #app": {
      height: "100%",
      // overflow: "clip",
      userSelect: "none",
    },
    "*::selection": {
      bg: {
        _dark: "gray.500/70",
      },
    },
  },
});

const system = createSystem(defaultConfig, customConfig);

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
