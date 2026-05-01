import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BLAQBONEZ — Best Rapper In Africa" },
      {
        name: "description",
        content:
          "Official site of Blaqbonez — Nigerian rapper, Chocolate City signee, self-proclaimed Best Rapper In Africa.",
      },
      { property: "og:title", content: "BLAQBONEZ — Best Rapper In Africa" },
      {
        property: "og:description",
        content: "Cinematic official site of Blaqbonez. Discography, story, and stream.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/api/site"
      title="Blaqbonez Official"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: 0,
        background: "#0a0a0a",
      }}
    />
  );
}
