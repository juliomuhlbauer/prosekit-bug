import { ProseKitEditor } from "@/components/ProseKit";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ProseKitEditor />;
}
