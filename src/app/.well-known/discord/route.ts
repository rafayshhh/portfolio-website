export const dynamic = "force-static";

export async function GET() {
  return new Response("dh=ed1d3950fd95badb1f12db0a5cb81603de73e3f3", {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
