import "prosekit/basic/style.css";
import "prosekit/basic/typography.css";

import { createEditor } from "prosekit/core";
import { ProseKit } from "prosekit/react";
import { useMemo } from "react";
import { Stack } from "@chakra-ui/react";
import { Toolbar } from "./Toolbar";
import { defineExtension } from "./extensions";

export function ProseKitEditor() {
  const editor = useMemo(() => {
    const extension = defineExtension();
    return createEditor({ extension });
  }, []);

  return (
    <ProseKit editor={editor}>
      <Stack>
        <Toolbar />

        <div
          ref={editor.mount}
          style={{ outline: "auto", padding: "1rem" }}
        ></div>
      </Stack>
    </ProseKit>
  );
}
