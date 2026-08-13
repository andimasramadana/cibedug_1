import { createFileRoute } from "@tanstack/react-router";
import { Struktur } from "@/components/Struktur";

export const Route = createFileRoute("/struktur")({
  component: () => <Struktur />,
});
