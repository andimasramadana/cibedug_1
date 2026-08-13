import { createFileRoute } from "@tanstack/react-router";
import { Kontak } from "@/components/Kontak";

export const Route = createFileRoute("/kontak")({
  component: () => <Kontak />,
});
