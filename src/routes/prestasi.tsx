import { createFileRoute } from "@tanstack/react-router";
import { Prestasi } from "@/components/Prestasi";

export const Route = createFileRoute("/prestasi")({
  component: () => <Prestasi />,
});
