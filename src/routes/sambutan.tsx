import { createFileRoute } from "@tanstack/react-router";
import { Sambutan } from "@/components/Sambutan";

export const Route = createFileRoute("/sambutan")({
  component: () => <Sambutan />,
});
