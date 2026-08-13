import { createFileRoute } from "@tanstack/react-router";
import { Pengumuman } from "@/components/Pengumuman";

export const Route = createFileRoute("/pengumuman")({
  component: () => <Pengumuman />,
});
