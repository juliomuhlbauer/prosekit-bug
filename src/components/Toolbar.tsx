import { useEditorDerivedValue } from "prosekit/react";
import { HStack, IconButton } from "@chakra-ui/react";
import {
  LuBold,
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuRedo,
  LuUndo,
} from "react-icons/lu";
import { EditorExtension } from "./extensions";
import { Editor } from "prosekit/core";

function ToolbarButton({
  active,
  disabled,
  onClick,
  tooltip,
  children,
}: {
  active: boolean;
  disabled: boolean;
  onClick: () => void;
  tooltip: string;
  children: React.ReactNode;
}) {
  return (
    <IconButton
      variant={active ? "solid" : "ghost"}
      title={tooltip}
      disabled={disabled}
      onClick={onClick}
      onMouseDown={(event) => event.preventDefault()}
    >
      {children}
    </IconButton>
  );
}

function getToolbarItems(editor: Editor<EditorExtension>) {
  return {
    undo: {
      active: false,
      canExec: editor.commands.undo.canExec(),
      command: () => editor.commands.undo(),
    },
    redo: {
      active: false,
      canExec: editor.commands.redo.canExec(),
      command: () => editor.commands.redo(),
    },
    bold: {
      active: editor.marks.bold.isActive(),
      canExec: editor.commands.toggleBold.canExec(),
      command: () => editor.commands.toggleBold(),
    },
    heading1: {
      active: editor.nodes.heading.isActive({ level: 1 }),
      canExec: editor.commands.toggleHeading.canExec({ level: 1 }),
      command: () => editor.commands.toggleHeading({ level: 1 }),
    },
    heading2: {
      active: editor.nodes.heading.isActive({ level: 2 }),
      canExec: editor.commands.toggleHeading.canExec({ level: 2 }),
      command: () => editor.commands.toggleHeading({ level: 2 }),
    },
    heading3: {
      active: editor.nodes.heading.isActive({ level: 3 }),
      canExec: editor.commands.toggleHeading.canExec({ level: 3 }),
      command: () => editor.commands.toggleHeading({ level: 3 }),
    },
    // Você pode adicionar outros comandos aqui, como inserir imagem, itálico etc.
  };
}

export function Toolbar() {
  const items = useEditorDerivedValue(getToolbarItems);

  return (
    <HStack px={16} py={4}>
      <ToolbarButton
        active={items.undo.active}
        disabled={!items.undo.canExec}
        onClick={items.undo.command}
        tooltip="Undo"
      >
        <LuUndo />
      </ToolbarButton>

      <ToolbarButton
        active={items.redo.active}
        disabled={!items.redo.canExec}
        onClick={items.redo.command}
        tooltip="Redo"
      >
        <LuRedo />
      </ToolbarButton>

      <ToolbarButton
        active={items.bold.active}
        disabled={!items.bold.canExec}
        onClick={items.bold.command}
        tooltip="Bold"
      >
        <LuBold />
      </ToolbarButton>

      <ToolbarButton
        active={items.heading1.active}
        disabled={!items.heading1.canExec}
        onClick={items.heading1.command}
        tooltip="Heading 1"
      >
        <LuHeading1 />
      </ToolbarButton>

      <ToolbarButton
        active={items.heading2.active}
        disabled={!items.heading2.canExec}
        onClick={items.heading2.command}
        tooltip="Heading 2"
      >
        <LuHeading2 />
      </ToolbarButton>

      <ToolbarButton
        active={items.heading3.active}
        disabled={!items.heading3.canExec}
        onClick={items.heading3.command}
        tooltip="Heading 3"
      >
        <LuHeading3 />
      </ToolbarButton>
    </HStack>
  );
}
