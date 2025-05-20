import { definePlugin, collectChildren } from "prosekit/core";
import { Plugin } from "prosekit/pm/state";
import { ProseMirrorNode } from "prosekit/pm/model";

export function defineListIndentBlocker() {
  return definePlugin(
    new Plugin({
      filterTransaction: (tr, oldState): boolean => {
        const oldDoc = oldState.doc;
        const newDoc = tr.doc;
        const canceled =
          hasExtraIndentList(newDoc) && !hasExtraIndentList(oldDoc);
        return !canceled;
      },
    })
  );
}

function hasExtraIndentList(node: ProseMirrorNode): boolean {
  if (isListNode(node) && isListNode(node.firstChild)) {
    return true;
  }
  return collectChildren(node).some(hasExtraIndentList);
}

function isListNode(node: ProseMirrorNode | null | undefined): boolean {
  return node?.type.name === "list";
}
