import { useEditor } from "prosekit/react";
import { Button, HStack, IconButton } from "@chakra-ui/react";
import {
  LuBold,
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuItalic,
  LuRedo,
  LuUndo,
} from "react-icons/lu";
import { EditorExtension } from "./extensions";

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
    <button
      style={{
        backgroundColor: active ? "#F5F5F5" : "transparent",
        border: "none",
        borderRadius: "4px",
        padding: "4px",
      }}
      aria-label={tooltip}
      disabled={disabled}
      onClick={onClick}
      onMouseDown={(event) => event.preventDefault()}
    >
      {children}
    </button>
  );
}

export function Toolbar() {
  const editor = useEditor<EditorExtension>({ update: true });

  return (
    <HStack px={16} py={4}>
      <ToolbarButton
        active={false}
        disabled={!editor.commands.undo.canExec()}
        onClick={editor.commands.undo}
        tooltip="Undo"
      >
        <LuUndo />
      </ToolbarButton>

      <ToolbarButton
        active={false}
        disabled={!editor.commands.redo.canExec()}
        onClick={editor.commands.redo}
        tooltip="Redo"
      >
        <LuRedo />
      </ToolbarButton>
      <ToolbarButton
        active={editor.marks.bold.isActive()}
        disabled={!editor.commands.toggleBold.canExec()}
        onClick={editor.commands.toggleBold}
        tooltip="Bold"
      >
        <LuBold />
      </ToolbarButton>

      {/* <ToolbarButton
        active={editor.marks.italic.isActive()}
        disabled={!editor.commands.toggleItalic.canExec()}
        onClick={editor.commands.toggleItalic}
        tooltip="Italic"
      >
        <LuItalic />
      </ToolbarButton> */}

      <ToolbarButton
        active={editor.nodes.heading.isActive({ level: 1 })}
        disabled={!editor.commands.toggleHeading.canExec({ level: 1 })}
        onClick={() => editor.commands.toggleHeading({ level: 1 })}
        tooltip="Heading 1"
      >
        <LuHeading1 />
      </ToolbarButton>
      <ToolbarButton
        active={editor.nodes.heading.isActive({ level: 2 })}
        disabled={!editor.commands.toggleHeading.canExec({ level: 2 })}
        onClick={() => editor.commands.toggleHeading({ level: 2 })}
        tooltip="Heading 2"
      >
        <LuHeading2 />
      </ToolbarButton>
      <ToolbarButton
        active={editor.nodes.heading.isActive({ level: 3 })}
        disabled={!editor.commands.toggleHeading.canExec({ level: 3 })}
        onClick={() => editor.commands.toggleHeading({ level: 3 })}
        tooltip="Heading 3"
      >
        <LuHeading3 />
      </ToolbarButton>
      {/* <ImageUploadPopover
        disabled={!editor.commands.insertImage.canExec()}
        tooltip="Insert Image"
      >
        <div className="i-lucide-image h-5 w-5" />
      </ImageUploadPopover> */}
    </HStack>
  );
}
