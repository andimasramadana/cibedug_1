import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";

const title = "Rayon Cibedug 1";
const description =
  "Website resmi Rayon Cibedug 1: sambutan pembimbing, struktur organisasi, dan jadwal piket harian siswa yang selalu diperbarui.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
    </>
  );
}

