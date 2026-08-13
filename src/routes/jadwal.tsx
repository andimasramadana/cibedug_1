import { createFileRoute } from "@tanstack/react-router";
import { JadwalPiket } from "@/components/JadwalPiket";

export const Route = createFileRoute("/jadwal")({
  component: () => <JadwalPiket />,
});
