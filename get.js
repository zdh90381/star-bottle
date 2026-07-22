export async function onRequest({ env }) {
  const { results } = await env.DB.prepare(
    "SELECT content,create_time FROM messages ORDER BY id DESC"
  ).all();
  return Response.json(results);
}
