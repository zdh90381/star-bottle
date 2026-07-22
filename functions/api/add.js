export async function onRequest({ request, env }) {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }
  const body = await request.json();
  const content = body.content.slice(0, 120);
  const now = new Date().toLocaleString();
  await env.DB.prepare(
    `INSERT INTO messages (content,create_time) VALUES (?,?)`
  ).bind(content, now).run();
  return Response.json({ success: true });
}
