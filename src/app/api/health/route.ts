export async function GET() {
  return Response.json({
    ok: true,
    service: "nextjs-scalable-folder-structure",
    timestamp: new Date().toISOString()
  });
}
