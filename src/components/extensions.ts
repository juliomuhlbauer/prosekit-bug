import { defineBasicExtension } from "prosekit/basic";
import { union } from "prosekit/core";
import { defineListIndentBlocker } from "./list-indent-blocker";

export function defineExtension() {
  return union(defineBasicExtension(), defineListIndentBlocker());
}

export type EditorExtension = ReturnType<typeof defineExtension>;
