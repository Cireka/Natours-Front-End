export default async function getTour(url) {
  let req = await fetch(url);
  return req.json();
}
