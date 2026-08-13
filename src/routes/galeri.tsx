import { createFileRoute } from "@tanstack/react-router";
import { Galeri } from "@/components/Galeri";

export const Route = createFileRoute("/galeri")({
  component: () => <Galeri />,
});
